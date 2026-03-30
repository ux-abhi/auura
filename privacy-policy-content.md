# Aurra — Privacy Policy Page Content
# For Claude Code: Use this content to build /app/privacy/page.tsx
# Effective date: 1 April 2026 | Last updated: 30 March 2026

---

## PAGE METADATA
```ts
export const metadata = {
  title: 'Privacy Policy — Aurra',
  description:
    'Aurra is built on a simple principle: your biometric and emotional data belongs to you. Read how we protect it.',
}
```

---

## DESIGN NOTES FOR CLAUDE CODE

- Layout: single-column, max-width `720px`, centered, generous line-height `1.8`
- Font: Instrument Sans body, Playfair Display for H1 only
- Colours: `#1d1d1f` text, `#6e6e73` secondary, `#f5f5f7` section backgrounds
- No sidebar TOC needed — use anchor links at top
- Each `##` section = a `<section>` with an `id` for anchor links
- Highlight boxes: `background #f5f5f7`, `border-left: 3px solid #1d1d1f`, `padding: 20px 24px`
- Last updated date displayed below H1 in `#6e6e73`, `13px`
- Print-friendly styles: remove nav/footer on `@media print`

---

## ANCHOR NAV (display as pill links at top of page)

```
Overview · Data we collect · How we use it · What leaves the pendant
Retention & deletion · Your rights · Children · Changes · Contact
```

---

## H1

```
Privacy Policy
```

**Subline:** `Effective 1 April 2026`

---

## OPENING HIGHLIGHT BOX

```
Aurra is built on one foundational principle: your biometric and emotional data
belongs to you — not to us.

Raw sensor data (heart rate waveforms, skin conductance readings, accelerometer
values, microphone audio) never leaves your pendant. Ever. This is not a promise
in a policy document. It is a technical constraint enforced by the pendant's
architecture. We cannot access it because the pendant does not transmit it.

The only data Aurra transmits via Bluetooth is an inferred mood position
(two numbers on a scale) and a lighting preset ID. That is all.
```

---

## SECTION 1 — Overview

**id:** `overview`

```
This Privacy Policy explains how Aurra Technologies ("Aurra", "we", "us") handles
information when you use the Aurra BCI pendant, the Aurra companion app
(iOS and Android), and the aurra.io website (together, the "Services").

We have written this policy to be readable by a person, not a lawyer. If something
is unclear, email us at privacy@aurra.io and we will explain it plainly.

By using our Services, you agree to the practices described in this policy.
If you do not agree, please do not use our Services.
```

---

## SECTION 2 — Data we collect

**id:** `data-we-collect`

**Headline:** `What data we collect, and where it lives`

### 2.1 — Data that stays on the pendant (we never see this)

```
The following data is collected by pendant sensors, processed on-device by the
TinyML inference engine, and never transmitted off the pendant:

  · Raw PPG (photoplethysmography) waveforms — heart rate and HRV source data
  · Raw EDA (electrodermal activity) readings — skin conductance source data
  · Raw IMU data — accelerometer and gyroscope readings
  · Microphone feature vectors — vocal prosody features extracted locally;
    no audio recordings are stored or transmitted
  · EEG band power estimates (if optional EEG companion is paired) — alpha,
    theta, and beta band power values; raw EEG is never stored or transmitted

This data is stored in encrypted flash memory on the pendant. You can delete all
of it at any time via the companion app. We have no technical ability to access
it remotely.
```

### 2.2 — Data the companion app receives from the pendant

```
The pendant transmits only the following data to the companion app via BLE:

  · Circumplex mood position — two floating-point values representing inferred
    valence (−1 to +1) and arousal (−1 to +1), updated every 30 seconds
  · Lighting preset ID — a single integer indicating the proposed lighting scene
  · Battery level — a percentage value
  · Device status — connected/disconnected, charging state, firmware version

This is the complete list. No raw biometric data is included in any BLE transmission.
```

### 2.3 — Data the companion app stores on your phone

```
The companion app stores locally on your device:

  · Mood history — a timestamped log of circumplex positions, stored in
    encrypted local storage. This is not synced to any server by default.
  · Lighting preferences — your saved preset customisations
  · App settings — notification preferences, snooze durations, paired device ID

None of this data is transmitted to Aurra servers unless you explicitly enable
cloud backup (see Section 4). Cloud backup is off by default.
```

### 2.4 — Data we collect on aurra.io

```
When you visit aurra.io or interact with our pre-order form, we collect:

  · Email address — if you submit a pre-order or waitlist request
  · IP address — collected automatically by our hosting infrastructure (Vercel)
    for security and rate-limiting purposes; not used for profiling
  · Browser and device type — collected in aggregated, anonymous form
    for site performance analytics (no individual tracking)
  · Cookies — we use one session cookie for form state only; no tracking cookies,
    no advertising pixels, no third-party analytics scripts

We do not use Google Analytics, Meta Pixel, or any behavioural tracking tool
on aurra.io.
```

---

## SECTION 3 — How we use data

**id:** `how-we-use-it`

**Headline:** `How we use what we collect`

```
We use the data described above only for the following purposes:

  · To operate the pendant and lighting system — mood positions are used
    to propose lighting changes. This is the entire point of the product.

  · To display your mood history — if you choose to view it in the companion app.
    This is for your benefit only.

  · To send pre-order confirmations — if you joined our waitlist, we will email
    you when Aurra ships and when your order is ready.

  · To respond to support requests — if you contact us, we use your email to reply.

  · To improve firmware and app stability — anonymised, aggregated crash reports
    (no biometric data) may be collected if you opt in to diagnostic sharing.
    This is off by default.

We do not use your data for advertising. We do not sell your data. We do not
share your data with third parties for their own purposes. We do not build
behavioural profiles. We do not use emotional data for any purpose other than
the one you purchased the product for.
```

---

## SECTION 4 — What leaves the pendant

**id:** `what-leaves-the-pendant`

**Headline:** `A precise accounting of what leaves the pendant`

**Highlight box:**
```
This section is the most important in this policy. We are being deliberately
precise because vague language around biometric data is how companies obscure
what they actually do with it.
```

**Table — display as styled table:**

| Data type | Stored on pendant | Sent to app | Sent to Aurra servers |
|---|---|---|---|
| Raw PPG waveform | Yes (encrypted) | Never | Never |
| Raw EDA readings | Yes (encrypted) | Never | Never |
| Raw IMU data | Yes (encrypted) | Never | Never |
| Microphone audio | Never stored | Never | Never |
| EEG band power (optional) | Temporary buffer | Never | Never |
| Inferred mood position | Yes (history log) | Yes (BLE) | Never by default |
| Lighting preset ID | No | Yes (BLE) | Never |
| Battery / device status | No | Yes (BLE) | Never |
| Mood history log | Yes (encrypted) | Read-only via BLE | Only if cloud backup enabled |

```
Cloud backup is disabled by default. If enabled, mood history is encrypted
end-to-end before leaving your device using a key derived from your device's
secure enclave. Aurra cannot decrypt this data.
```

---

## SECTION 5 — Retention and deletion

**id:** `retention-deletion`

**Headline:** `How long we keep data, and how to delete it`

### On the pendant

```
Mood history is stored on the pendant's encrypted flash memory for up to 90 days
in a rolling window. Older entries are automatically deleted to free storage.

You can delete all pendant data at any time:
  · In the companion app: Settings → Pendant → Erase all data
  · Physically: a factory reset button is recessed in the base of the pendant
    (documented in the setup guide)

Deletion is permanent and immediate. We have no copy.
```

### In the companion app

```
App data (local mood history, preferences) is deleted when you uninstall the app
or use Settings → Account → Delete all local data.

If you enabled cloud backup, you can delete your cloud data at any time via
Settings → Cloud → Delete cloud backup. Deletion is permanent within 30 days.
```

### Pre-order email list

```
If you submitted your email for the pre-order waitlist, we retain your email
address until you unsubscribe or request deletion. Every email we send includes
a one-click unsubscribe link.

To request deletion of your email from our records, email privacy@aurra.io
with the subject "Delete my data". We will confirm deletion within 7 days.
```

---

## SECTION 6 — Your rights

**id:** `your-rights`

**Headline:** `Your rights under GDPR and applicable law`

```
If you are located in the European Economic Area, United Kingdom, or other
jurisdictions with applicable data protection law, you have the following rights:

  · Right of access — you can request a copy of any personal data we hold about you.
    Since we hold only your email address (if you signed up) and optionally your
    cloud-encrypted mood history, this is straightforward.

  · Right to rectification — you can correct inaccurate data.

  · Right to erasure — you can request deletion of all data we hold about you
    (see Section 5). For on-pendant data, deletion is entirely within your own control.

  · Right to restrict processing — you can ask us to stop processing your data
    while a dispute is resolved.

  · Right to data portability — you can export your mood history as a JSON file
    from the companion app at any time (Settings → Export data).

  · Right to object — you can object to any processing of your personal data.

  · Right to withdraw consent — where processing is based on consent, you can
    withdraw it at any time.

To exercise any of these rights, contact us at privacy@aurra.io. We will respond
within 30 days. If you are dissatisfied with our response, you have the right
to lodge a complaint with your local data protection authority. In Germany,
this is the Landesbeauftragter für den Datenschutz (LfDI).
```

---

## SECTION 7 — Security

**id:** `security`

**Headline:** `How we protect data`

```
We take the security of biometric and emotional data seriously and apply the
following measures:

  · On-pendant encryption — all stored data uses AES-256 encryption with keys
    derived from the pendant's hardware secure element.

  · BLE communication — all pendant-to-app BLE communication is encrypted
    using BLE 5.2 LE Secure Connections.

  · App local storage — local mood history in the companion app is stored in
    the device's encrypted storage (iOS Secure Enclave, Android Keystore).

  · Cloud backup (optional) — end-to-end encrypted before leaving the device.
    Aurra holds no decryption keys.

  · Website — aurra.io uses HTTPS with HSTS. Pre-order emails are stored in a
    database with access controls limited to two authorised personnel.

  · No tracking infrastructure — aurra.io does not use third-party analytics,
    advertising pixels, or session recording tools that could expose visitor data.

No security measure is perfect. If you discover a vulnerability, please report
it responsibly to security@aurra.io. We commit to acknowledging reports within
48 hours and resolving confirmed vulnerabilities within 90 days.
```

---

## SECTION 8 — Third parties

**id:** `third-parties`

**Headline:** `Third parties we work with`

```
We share data with the following third parties, strictly limited to what is
necessary for operating our services:

  · Vercel — hosts aurra.io. Receives IP addresses and request logs.
    Privacy policy: vercel.com/legal/privacy-policy

  · Resend — sends transactional emails (pre-order confirmations, shipping notices).
    Receives your email address only.
    Privacy policy: resend.com/legal/privacy-policy

  · Apple App Store / Google Play Store — distributes the companion app.
    Subject to Apple and Google's respective privacy policies.

We do not work with advertising networks, data brokers, analytics vendors,
or any third party that would receive biometric or mood data.

If this list changes, we will update this policy and notify pre-order
customers by email before the change takes effect.
```

---

## SECTION 9 — Children

**id:** `children`

**Headline:** `Children's privacy`

```
Aurra is not intended for use by children under the age of 16. We do not
knowingly collect personal data from children under 16. If you believe a child
under 16 has submitted data to us, please contact privacy@aurra.io and we will
delete it promptly.

For users aged 16–18, we recommend reviewing this policy with a parent or guardian.
```

---

## SECTION 10 — Changes to this policy

**id:** `changes`

**Headline:** `How we handle policy changes`

```
We may update this Privacy Policy as our product evolves. We commit to the
following when we make changes:

  · We will post the updated policy at aurra.io/privacy with a new effective date.

  · For material changes — changes that expand the types of data we collect,
    how we use it, or who we share it with — we will notify all registered users
    by email at least 30 days before the change takes effect.

  · We will maintain an archive of previous policy versions, available on request.

  · We will never retroactively apply new data practices to data already collected
    without your explicit consent.

The "Last updated" date at the top of this page reflects the most recent revision.
```

---

## SECTION 11 — Contact

**id:** `contact`

**Headline:** `Contact us`

```
For privacy questions, data requests, or security disclosures:

  Privacy:   privacy@aurra.io
  Security:  security@aurra.io
  Research:  research@aurra.io
  General:   hello@aurra.io

Aurra Technologies
c/o University of Siegen
57076 Siegen, North Rhine-Westphalia
Germany

We aim to respond to all privacy enquiries within 5 business days.
```

---

## CLOSING NOTE (display as final highlight box)

```
One more thing.

We built Aurra because we believe your emotional life deserves privacy.
Not because a regulator told us so — because the people who helped us
design this product told us so.

"I don't mind if it watches me, as long as I can also watch what it knows."

That sentence, from a workshop participant at the University of Siegen,
is the design brief for this entire policy.
```

---

## COMPONENT NOTES FOR CLAUDE CODE

```
File path:     /app/privacy/page.tsx
Route:         /privacy
Nav link:      Add "Privacy" to Footer links array

Styling:
  - Single column, max-width 720px, margin auto, padding 120px vertical
  - H1: Playfair Display, 52px, weight 300
  - H2 (section headings): Instrument Sans, 22px, weight 500
  - H3: Instrument Sans, 16px, weight 500, color #6e6e73
  - Body: Instrument Sans, 16px, weight 300, line-height 1.8, color #1d1d1f
  - Anchor nav pills: 12px, letter-spacing 0.08em, border 1px #e8e8ed,
    padding 4px 12px, border-radius 999px, hover background #f5f5f7
  - Highlight boxes: background #f5f5f7, border-left 3px solid #1d1d1f,
    padding 24px 28px, margin 32px 0
  - Table: full-width, 1px border #e8e8ed on all cells, header row
    background #f5f5f7, font-size 14px, padding 10px 14px
  - Section spacing: margin-top 64px between sections
  - Scroll reveal: NOT needed on privacy page — content should be
    immediately visible for accessibility and print

Print styles (@media print):
  - Hide nav, footer, anchor nav pills
  - Remove box shadows and borders
  - Show full URL after links
```
