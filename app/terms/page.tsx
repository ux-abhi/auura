import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — Aurra',
  description: 'Terms of Service for Aurra BCI smart pendant and companion services.',
}

export default function TermsPage() {
  return (
    <main className="bg-white pt-[52px]">
      <div className="mx-auto px-6 py-[120px]" style={{ maxWidth: 720 }}>
        <h1
          className="font-display text-aurra-dark leading-tight tracking-[-0.02em]"
          style={{ fontSize: 'clamp(40px, 6vw, 52px)', fontWeight: 300 }}
        >
          Terms of Service
        </h1>
        <p className="font-body text-[13px] text-aurra-mid mt-2 mb-12">Coming soon · Effective 1 April 2026</p>

        <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-6" style={{ fontWeight: 300 }}>
          Full terms of service will be published before Aurra ships. They will cover your rights as a customer, warranty terms, return policy, and acceptable use of the pendant and companion software.
        </p>
        <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
          Questions in the meantime?{' '}
          <a
            href="mailto:buyaurra@gmail.com"
            className="text-aurra-dark hover:opacity-60 transition-opacity duration-200"
          >
            buyaurra@gmail.com
          </a>
        </p>

        <div className="mt-16 pt-8 border-t border-aurra-light">
          <Link
            href="/"
            className="font-body text-[14px] text-aurra-mid hover:text-aurra-dark transition-colors duration-200"
          >
            ← Back to aurra
          </Link>
        </div>
      </div>
    </main>
  )
}
