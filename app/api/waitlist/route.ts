import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory rate limiting (resets on cold start — acceptable for serverless)
const ipTimestamps = new Map<string, number>()
const RATE_LIMIT_MS = 60 * 60 * 1000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

async function sendOwnerNotification(subscriberEmail: string) {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD
  if (!user || !pass) return

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `"aurra waitlist" <${user}>`,
    to: user,
    subject: `New waitlist signup: ${subscriberEmail}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:480px;margin:0 auto;padding:32px;background:#fff;color:#1d1d1f">
        <p style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6e6e73;margin-bottom:24px">aurra · waitlist notification</p>
        <h1 style="font-size:28px;font-weight:400;margin:0 0 16px">New signup</h1>
        <p style="font-size:16px;color:#6e6e73;margin:0 0 24px">Someone just joined the aurra waitlist.</p>
        <div style="border:1px solid #e8e8ed;padding:16px 20px;font-size:15px;font-family:monospace;color:#1d1d1f;background:#f5f5f7">
          ${subscriberEmail}
        </div>
        <p style="font-size:12px;color:#6e6e73;margin-top:32px">Sent automatically by aurra.io</p>
      </div>
    `,
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = (body?.email ?? '').trim().toLowerCase()

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Rate limit by IP
    const ip = getClientIp(req)
    const lastSubmit = ipTimestamps.get(ip)
    if (lastSubmit && Date.now() - lastSubmit < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "You're already on the list!" },
        { status: 429 }
      )
    }
    ipTimestamps.set(ip, Date.now())

    // Send notification email — awaited so it completes before function exits
    try {
      await sendOwnerNotification(email)
    } catch (emailErr) {
      // Log but don't fail the request — signup still succeeded
      console.error('Email notification failed:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist POST error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
