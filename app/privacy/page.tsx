import AnchorNav from '@/components/ui/AnchorNav'
import HighlightBox from '@/components/ui/HighlightBox'
import PolicyTable from '@/components/ui/PolicyTable'

export const metadata = {
  title: 'Privacy Policy — Aurra',
  description:
    'Aurra is built on a simple principle: your biometric and emotional data belongs to you. Read how we protect it.',
}

const ANCHOR_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Data we collect', href: '#data-we-collect' },
  { label: 'How we use it', href: '#how-we-use-it' },
  { label: 'What leaves the pendant', href: '#what-leaves-the-pendant' },
  { label: 'Retention & deletion', href: '#retention-deletion' },
  { label: 'Your rights', href: '#your-rights' },
  { label: 'Security', href: '#security' },
  { label: 'Third parties', href: '#third-parties' },
  { label: 'Children', href: '#children' },
  { label: 'Changes', href: '#changes' },
  { label: 'Contact', href: '#contact' },
]

const TABLE_HEADERS = ['Data type', 'Stored on pendant', 'Sent to app', 'Sent to Aurra servers']
const TABLE_ROWS = [
  { cells: ['Raw PPG waveform', 'Yes (encrypted)', 'Never', 'Never'] },
  { cells: ['Raw EDA readings', 'Yes (encrypted)', 'Never', 'Never'] },
  { cells: ['Raw IMU data', 'Yes (encrypted)', 'Never', 'Never'] },
  { cells: ['Microphone audio', 'Never stored', 'Never', 'Never'] },
  { cells: ['EEG band power (optional)', 'Temporary buffer', 'Never', 'Never'] },
  { cells: ['Inferred mood position', 'Yes (history log)', 'Yes (BLE)', 'Never by default'] },
  { cells: ['Lighting preset ID', 'No', 'Yes (BLE)', 'Never'] },
  { cells: ['Battery / device status', 'No', 'Yes (BLE)', 'Never'] },
  { cells: ['Mood history log', 'Yes (encrypted)', 'Read-only via BLE', 'Only if cloud backup enabled'] },
]

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        @media print {
          header, footer, nav { display: none !important; }
          .anchor-nav-bar { display: none !important; }
          a[href]::after { content: " (" attr(href) ")"; font-size: 11px; color: #6e6e73; }
          * { box-shadow: none !important; border-color: #ccc !important; }
        }
      `}</style>

      <main className="bg-white pt-[52px]">
        {/* Anchor nav */}
        <div className="anchor-nav-bar">
          <AnchorNav links={ANCHOR_LINKS} />
        </div>

        <div className="mx-auto px-6 py-[120px]" style={{ maxWidth: 720 }}>
          {/* H1 */}
          <h1
            className="font-display text-aurra-dark leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(40px, 6vw, 52px)', fontWeight: 300 }}
          >
            Privacy Policy
          </h1>
          <p className="font-body text-[13px] text-aurra-mid mt-2 mb-8">Effective 1 April 2026 · Last updated 30 March 2026</p>

          {/* Opening highlight box */}
          <HighlightBox>
            <p>
              Aurra is built on one foundational principle: your biometric and emotional data belongs to you — not to us.
            </p>
            <p className="mt-3">
              Raw sensor data (heart rate waveforms, skin conductance readings, accelerometer values, microphone audio) never leaves your pendant. Ever. This is not a promise in a policy document. It is a technical constraint enforced by the pendant's architecture. We cannot access it because the pendant does not transmit it.
            </p>
            <p className="mt-3">
              The only data Aurra transmits via Bluetooth is an inferred mood position (two numbers on a scale) and a lighting preset ID. That is all.
            </p>
          </HighlightBox>

          {/* Section 1 — Overview */}
          <section id="overview" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">Overview</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              This Privacy Policy explains how Aurra Technologies ("Aurra", "we", "us") handles information when you use the Aurra BCI pendant, the Aurra companion app (iOS and Android), and the aurra.io website (together, the "Services").
            </p>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              We have written this policy to be readable by a person, not a lawyer. If something is unclear, email us at <a href="mailto:privacy@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">privacy@aurra.io</a> and we will explain it plainly.
            </p>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              By using our Services, you agree to the practices described in this policy. If you do not agree, please do not use our Services.
            </p>
          </section>

          {/* Section 2 — Data we collect */}
          <section id="data-we-collect" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">What data we collect, and where it lives</h2>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3">2.1 — Data that stays on the pendant (we never see this)</h3>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              The following data is collected by pendant sensors, processed on-device by the TinyML inference engine, and never transmitted off the pendant:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· Raw PPG (photoplethysmography) waveforms — heart rate and HRV source data</li>
              <li>· Raw EDA (electrodermal activity) readings — skin conductance source data</li>
              <li>· Raw IMU data — accelerometer and gyroscope readings</li>
              <li>· Microphone feature vectors — vocal prosody features extracted locally; no audio recordings are stored or transmitted</li>
              <li>· EEG band power estimates (if optional EEG companion is paired) — alpha, theta, and beta band power values; raw EEG is never stored or transmitted</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              This data is stored in encrypted flash memory on the pendant. You can delete all of it at any time via the companion app. We have no technical ability to access it remotely.
            </p>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3 mt-8">2.2 — Data the companion app receives from the pendant</h3>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              The pendant transmits only the following data to the companion app via BLE:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· Circumplex mood position — two floating-point values representing inferred valence (−1 to +1) and arousal (−1 to +1), updated every 30 seconds</li>
              <li>· Lighting preset ID — a single integer indicating the proposed lighting scene</li>
              <li>· Battery level — a percentage value</li>
              <li>· Device status — connected/disconnected, charging state, firmware version</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              This is the complete list. No raw biometric data is included in any BLE transmission.
            </p>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3 mt-8">2.3 — Data the companion app stores on your phone</h3>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              The companion app stores locally on your device:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· Mood history — a timestamped log of circumplex positions, stored in encrypted local storage. This is not synced to any server by default.</li>
              <li>· Lighting preferences — your saved preset customisations</li>
              <li>· App settings — notification preferences, snooze durations, paired device ID</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              None of this data is transmitted to Aurra servers unless you explicitly enable cloud backup (see Section 4). Cloud backup is off by default.
            </p>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3 mt-8">2.4 — Data we collect on aurra.io</h3>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              When you visit aurra.io or interact with our pre-order form, we collect:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· Email address — if you submit a pre-order or waitlist request</li>
              <li>· IP address — collected automatically by our hosting infrastructure (Vercel) for security and rate-limiting purposes; not used for profiling</li>
              <li>· Browser and device type — collected in aggregated, anonymous form for site performance analytics (no individual tracking)</li>
              <li>· Cookies — we use one session cookie for form state only; no tracking cookies, no advertising pixels, no third-party analytics scripts</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              We do not use Google Analytics, Meta Pixel, or any behavioural tracking tool on aurra.io.
            </p>
          </section>

          {/* Section 3 — How we use it */}
          <section id="how-we-use-it" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">How we use what we collect</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              We use the data described above only for the following purposes:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· To operate the pendant and lighting system — mood positions are used to propose lighting changes. This is the entire point of the product.</li>
              <li>· To display your mood history — if you choose to view it in the companion app. This is for your benefit only.</li>
              <li>· To send pre-order confirmations — if you joined our waitlist, we will email you when Aurra ships and when your order is ready.</li>
              <li>· To respond to support requests — if you contact us, we use your email to reply.</li>
              <li>· To improve firmware and app stability — anonymised, aggregated crash reports (no biometric data) may be collected if you opt in to diagnostic sharing. This is off by default.</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              We do not use your data for advertising. We do not sell your data. We do not share your data with third parties for their own purposes. We do not build behavioural profiles. We do not use emotional data for any purpose other than the one you purchased the product for.
            </p>
          </section>

          {/* Section 4 — What leaves the pendant */}
          <section id="what-leaves-the-pendant" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">A precise accounting of what leaves the pendant</h2>
            <HighlightBox>
              This section is the most important in this policy. We are being deliberately precise because vague language around biometric data is how companies obscure what they actually do with it.
            </HighlightBox>
            <PolicyTable headers={TABLE_HEADERS} rows={TABLE_ROWS} />
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mt-4" style={{ fontWeight: 300 }}>
              Cloud backup is disabled by default. If enabled, mood history is encrypted end-to-end before leaving your device using a key derived from your device's secure enclave. Aurra cannot decrypt this data.
            </p>
          </section>

          {/* Section 5 — Retention & deletion */}
          <section id="retention-deletion" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">How long we keep data, and how to delete it</h2>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3">On the pendant</h3>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              Mood history is stored on the pendant's encrypted flash memory for up to 90 days in a rolling window. Older entries are automatically deleted to free storage.
            </p>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mb-2" style={{ fontWeight: 300 }}>
              You can delete all pendant data at any time:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· In the companion app: Settings → Pendant → Erase all data</li>
              <li>· Physically: a factory reset button is recessed in the base of the pendant (documented in the setup guide)</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              Deletion is permanent and immediate. We have no copy.
            </p>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3 mt-8">In the companion app</h3>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mb-3" style={{ fontWeight: 300 }}>
              App data (local mood history, preferences) is deleted when you uninstall the app or use Settings → Account → Delete all local data.
            </p>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              If you enabled cloud backup, you can delete your cloud data at any time via Settings → Cloud → Delete cloud backup. Deletion is permanent within 30 days.
            </p>

            <h3 className="font-body text-[16px] font-medium text-aurra-mid mb-3 mt-8">Pre-order email list</h3>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mb-3" style={{ fontWeight: 300 }}>
              If you submitted your email for the pre-order waitlist, we retain your email address until you unsubscribe or request deletion. Every email we send includes a one-click unsubscribe link.
            </p>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              To request deletion of your email from our records, email <a href="mailto:privacy@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">privacy@aurra.io</a> with the subject "Delete my data". We will confirm deletion within 7 days.
            </p>
          </section>

          {/* Section 6 — Your rights */}
          <section id="your-rights" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">Your rights under GDPR and applicable law</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              If you are located in the European Economic Area, United Kingdom, or other jurisdictions with applicable data protection law, you have the following rights:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-2" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· <strong className="text-aurra-dark font-normal">Right of access</strong> — you can request a copy of any personal data we hold about you. Since we hold only your email address (if you signed up) and optionally your cloud-encrypted mood history, this is straightforward.</li>
              <li>· <strong className="text-aurra-dark font-normal">Right to rectification</strong> — you can correct inaccurate data.</li>
              <li>· <strong className="text-aurra-dark font-normal">Right to erasure</strong> — you can request deletion of all data we hold about you (see Section 5). For on-pendant data, deletion is entirely within your own control.</li>
              <li>· <strong className="text-aurra-dark font-normal">Right to restrict processing</strong> — you can ask us to stop processing your data while a dispute is resolved.</li>
              <li>· <strong className="text-aurra-dark font-normal">Right to data portability</strong> — you can export your mood history as a JSON file from the companion app at any time (Settings → Export data).</li>
              <li>· <strong className="text-aurra-dark font-normal">Right to object</strong> — you can object to any processing of your personal data.</li>
              <li>· <strong className="text-aurra-dark font-normal">Right to withdraw consent</strong> — where processing is based on consent, you can withdraw it at any time.</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              To exercise any of these rights, contact us at <a href="mailto:privacy@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">privacy@aurra.io</a>. We will respond within 30 days. If you are dissatisfied with our response, you have the right to lodge a complaint with your local data protection authority. In Germany, this is the Landesbeauftragter für den Datenschutz (LfDI).
            </p>
          </section>

          {/* Section 7 — Security */}
          <section id="security" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">How we protect data</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              We take the security of biometric and emotional data seriously and apply the following measures:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-2" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· <strong className="text-aurra-dark font-normal">On-pendant encryption</strong> — all stored data uses AES-256 encryption with keys derived from the pendant's hardware secure element.</li>
              <li>· <strong className="text-aurra-dark font-normal">BLE communication</strong> — all pendant-to-app BLE communication is encrypted using BLE 5.2 LE Secure Connections.</li>
              <li>· <strong className="text-aurra-dark font-normal">App local storage</strong> — local mood history in the companion app is stored in the device's encrypted storage (iOS Secure Enclave, Android Keystore).</li>
              <li>· <strong className="text-aurra-dark font-normal">Cloud backup (optional)</strong> — end-to-end encrypted before leaving the device. Aurra holds no decryption keys.</li>
              <li>· <strong className="text-aurra-dark font-normal">Website</strong> — aurra.io uses HTTPS with HSTS. Pre-order emails are stored in a database with access controls limited to two authorised personnel.</li>
              <li>· <strong className="text-aurra-dark font-normal">No tracking infrastructure</strong> — aurra.io does not use third-party analytics, advertising pixels, or session recording tools that could expose visitor data.</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              No security measure is perfect. If you discover a vulnerability, please report it responsibly to <a href="mailto:security@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">security@aurra.io</a>. We commit to acknowledging reports within 48 hours and resolving confirmed vulnerabilities within 90 days.
            </p>
          </section>

          {/* Section 8 — Third parties */}
          <section id="third-parties" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">Third parties we work with</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              We share data with the following third parties, strictly limited to what is necessary for operating our services:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-2" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· <strong className="text-aurra-dark font-normal">Vercel</strong> — hosts aurra.io. Receives IP addresses and request logs.</li>
              <li>· <strong className="text-aurra-dark font-normal">Resend</strong> — sends transactional emails (pre-order confirmations, shipping notices). Receives your email address only.</li>
              <li>· <strong className="text-aurra-dark font-normal">Apple App Store / Google Play Store</strong> — distributes the companion app. Subject to Apple and Google's respective privacy policies.</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              We do not work with advertising networks, data brokers, analytics vendors, or any third party that would receive biometric or mood data. If this list changes, we will update this policy and notify pre-order customers by email before the change takes effect.
            </p>
          </section>

          {/* Section 9 — Children */}
          <section id="children" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">Children&apos;s privacy</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-3" style={{ fontWeight: 300 }}>
              Aurra is not intended for use by children under the age of 16. We do not knowingly collect personal data from children under 16. If you believe a child under 16 has submitted data to us, please contact <a href="mailto:privacy@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">privacy@aurra.io</a> and we will delete it promptly.
            </p>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              For users aged 16–18, we recommend reviewing this policy with a parent or guardian.
            </p>
          </section>

          {/* Section 10 — Changes */}
          <section id="changes" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">How we handle policy changes</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-4" style={{ fontWeight: 300 }}>
              We may update this Privacy Policy as our product evolves. We commit to the following when we make changes:
            </p>
            <ul className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-4 space-y-1" style={{ fontWeight: 300, paddingLeft: 20 }}>
              <li>· We will post the updated policy at aurra.io/privacy with a new effective date.</li>
              <li>· For material changes — changes that expand the types of data we collect, how we use it, or who we share it with — we will notify all registered users by email at least 30 days before the change takes effect.</li>
              <li>· We will maintain an archive of previous policy versions, available on request.</li>
              <li>· We will never retroactively apply new data practices to data already collected without your explicit consent.</li>
            </ul>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
            </p>
          </section>

          {/* Section 11 — Contact */}
          <section id="contact" style={{ marginTop: 64 }}>
            <h2 className="font-body text-[22px] font-medium text-aurra-dark mb-4">Contact us</h2>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-6" style={{ fontWeight: 300 }}>
              For privacy questions, data requests, or security disclosures:
            </p>
            <div className="font-body text-[15px] text-aurra-mid leading-[1.9] mb-6 space-y-1" style={{ fontWeight: 300 }}>
              <p>Privacy: <a href="mailto:privacy@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">privacy@aurra.io</a></p>
              <p>Security: <a href="mailto:security@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">security@aurra.io</a></p>
              <p>Research: <a href="mailto:research@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">research@aurra.io</a></p>
              <p>General: <a href="mailto:hello@aurra.io" className="text-aurra-dark hover:opacity-60 transition-opacity">hello@aurra.io</a></p>
            </div>
            <div className="font-body text-[15px] text-aurra-mid leading-[1.7]" style={{ fontWeight: 300 }}>
              <p>Aurra Technologies</p>
              <p>c/o University of Siegen</p>
              <p>57076 Siegen, North Rhine-Westphalia</p>
              <p>Germany</p>
            </div>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mt-4" style={{ fontWeight: 300 }}>
              We aim to respond to all privacy enquiries within 5 business days.
            </p>
          </section>

          {/* Closing highlight box */}
          <HighlightBox className="mt-16">
            <p className="font-display italic text-[18px] text-aurra-dark leading-[1.6]" style={{ fontWeight: 400 }}>
              One more thing.
            </p>
            <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mt-3" style={{ fontWeight: 300 }}>
              We built Aurra because we believe your emotional life deserves privacy. Not because a regulator told us so — because the people who helped us design this product told us so.
            </p>
            <blockquote
              className="font-display italic text-aurra-dark leading-[1.5] my-4"
              style={{
                fontSize: 17,
                borderLeft: '3px solid #1d1d1f',
                paddingLeft: 20,
                fontWeight: 400,
              }}
            >
              &ldquo;I don&apos;t mind if it watches me, as long as I can also watch what it knows.&rdquo;
            </blockquote>
            <p className="font-body text-[14px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
              That sentence, from a workshop participant at the University of Siegen, is the design brief for this entire policy.
            </p>
          </HighlightBox>
        </div>
      </main>
    </>
  )
}
