import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Simple in-memory rate limiting (resets on server restart)
const ipTimestamps = new Map<string, number>()
const RATE_LIMIT_MS = 60 * 60 * 1000 // 1 hour

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = (body?.email ?? '').trim().toLowerCase()

    // Validate email
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
        { error: 'You already reserved a spot. Check your inbox!' },
        { status: 429 }
      )
    }
    ipTimestamps.set(ip, Date.now())

    // Persist to waitlist.json
    const filePath = path.join(process.cwd(), 'waitlist.json')
    let list: Array<{ email: string; timestamp: string }> = []

    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, 'utf-8')
        list = JSON.parse(raw)
      } catch {
        list = []
      }
    }

    // Check for duplicate email
    if (list.some((entry) => entry.email === email)) {
      return NextResponse.json(
        { error: 'This email is already on the list!' },
        { status: 409 }
      )
    }

    list.push({ email, timestamp: new Date().toISOString() })
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
