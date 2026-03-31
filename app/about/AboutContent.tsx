'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const EASE = [0.22, 1, 0.36, 1] as const

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.1, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const STATS = [
  { value: '9', label: 'workshop\nparticipants' },
  { value: '2.5', label: 'hours of\nresearch' },
  { value: '13', label: 'device concepts\nevaluated' },
  { value: '100%', label: 'voted pendant\nas Tier 1' },
  { value: '7', label: 'role-play\nscenarios' },
  { value: '5', label: 'core design\nprinciples' },
]

const SCIENCE = [
  {
    n: '01',
    title: 'Heart rate variability',
    tag: 'Cardiac · PPG optical sensor',
    body: 'The vagus nerve carries emotional state signals from the limbic system through the neck and chest. A pendant at the sternum reads HRV — the variation in time between heartbeats — which is a direct readout of vagal tone. High HRV: calm, positive affect. Low HRV: stress, negative valence. Not metaphorical. A physical wire the brain uses to regulate emotional state.',
  },
  {
    n: '02',
    title: 'Electrodermal activity',
    tag: 'Sympathetic NS · dry electrodes',
    body: 'Sweat glands are controlled entirely by the sympathetic nervous system — the same system that activates during stress, excitement, or surprise. EDA spikes before conscious awareness of emotion. It is one of the fastest physiological emotion signals available, making it ideal for detecting mood shifts as they happen rather than after they are established.',
  },
  {
    n: '03',
    title: 'The Russell circumplex',
    tag: 'Affective science · J.A. Russell, 1980',
    body: 'Aurra plots your state on two axes: valence (negative → positive) and arousal (low → high). This is the Russell circumplex model — a validated framework mapping emotional states as a continuous space rather than discrete categories. This is more honest about what physiological sensing can do: it cannot reliably distinguish "happy" from "excited", but it can distinguish high-arousal positive from low-arousal negative.',
  },
  {
    n: '04',
    title: 'On-device inference',
    tag: 'ARM Cortex-M33 · INT8 · BLE 5.2',
    body: 'All processing happens on the pendant. A compressed INT8 neural network — under 400 KB — fuses sensor signals into a circumplex position in under 80 milliseconds. No raw biometric data is transmitted. The only thing that leaves via BLE is two floating-point numbers and a lighting preset ID. Raw biometrics never leave the pendant. This is a technical constraint, not a policy promise.',
  },
]

const PRINCIPLES = [
  {
    n: '01',
    title: 'Subtlety over visibility',
    body: 'Lighting changes should be felt, not noticed. Participants consistently rejected dramatic transitions — even when technically appropriate. If you notice the light changed, we moved too fast.',
  },
  {
    n: '02',
    title: 'Assistance over automation',
    body: 'The system proposes. You decide. A gentle haptic suggests a change. Doing nothing for three seconds accepts it. One tap modifies it. Two taps snooze for 30 minutes. Trust is built through correct proposals, not through overriding your preferences.',
  },
  {
    n: '03',
    title: 'Ownership over data extraction',
    body: 'Your biometric and mood data belongs to you. It lives on the pendant. Delete all of it in a single tap. No accounts required. No cloud sync by default. No third party ever sees your data.',
  },
  {
    n: '04',
    title: 'Wearability over invasiveness',
    body: 'Three criteria: passive (no active maintenance), removable (off in under five seconds), socially invisible (looks like jewellery, because it is jewellery). Any device failing these was rejected.',
  },
  {
    n: '05',
    title: 'Control over intelligence',
    body: 'A less accurate system with high user control is better than a more accurate system with low control. You can override Aurra instantly, always, without explanation.',
  },
]

const QUOTES = [
  { text: "I don't mind if it watches me, as long as I can also watch what it knows.", credit: 'Workshop participant, provocation card session' },
  { text: "I would start constantly thinking about what my blood pressure is doing.", credit: 'On visible emotional feedback to others' },
  { text: "It's not a gadget. It feels more like something you'd inherit.", credit: 'On the jewellery form factor' },
]

const FINDINGS = [
  {
    label: 'Finding 01',
    title: 'The two-stage morning',
    body: 'Every participant who addressed the morning wake-up scenario independently proposed the same two-stage sequence: calm warm amber first, then brighter neutral white once the user signals readiness. Neither group knew the other had proposed it. This became a core Aurra default mode.',
  },
  {
    label: 'Finding 02',
    title: 'The gaslighting effect',
    body: 'When the AI overrode a manual lighting choice, participants used the word "gaslit" spontaneously in both groups. A system that insists it knows you better than you know yourself does not just fail usability — it damages epistemic self-trust. Aurra never insists. It yields instantly.',
  },
  {
    label: 'Finding 03',
    title: 'The pendant paradox',
    body: 'Brain implants scored highest on sensing capability and lowest on social acceptance. The pendant scored second on sensing and first on acceptance. Good-enough sensing in an acceptable form factor beats high-fidelity sensing in an unacceptable one.',
  },
]

function PrinciplesAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="border-t border-white/10">
      {PRINCIPLES.map((p, i) => (
        <div key={p.n} className="border-b border-white/10">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
          >
            <div className="flex items-baseline gap-5">
              <span className="font-display text-[13px] tracking-[0.12em]" style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>{p.n}</span>
              <span className="font-display text-[20px] md:text-[24px] text-white tracking-[-0.01em]" style={{ fontWeight: 300 }}>{p.title}</span>
            </div>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="text-[20px] flex-shrink-0 ml-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="overflow-hidden"
              >
                <p className="font-body text-[15px] leading-[1.8] pb-7 pl-[46px] md:pl-[58px]" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
                  {p.body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function AboutContent() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-end px-6 overflow-hidden"
        style={{ minHeight: '92vh', background: '#0a0a0b', paddingBottom: '10vh' }}
      >
        {/* Animated blue gradient orbs */}
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute"
          style={{
            width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)',
            filter: 'blur(80px)', top: '5%', left: '20%',
          }}
        />
        <motion.div
          animate={{ x: [0, -50, 20, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="pointer-events-none absolute"
          style={{
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.07) 50%, transparent 70%)',
            filter: 'blur(70px)', top: '30%', right: '10%',
          }}
        />
        {/* Subtle radial warm glow at bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,100,160,0.08) 0%, transparent 70%)' }}
        />
        {/* Grid lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
        />

        <div className="relative mx-auto w-full" style={{ maxWidth: 980 }}>
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="font-body text-[12px] tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Research-backed · aurra
              </span>
            </div>
          </FadeIn>

          <FadeUp delay={0.2}>
            <h1
              className="font-display text-white leading-[1.04] tracking-[-0.025em] mb-8"
              style={{ fontSize: 'clamp(52px, 9vw, 108px)', fontWeight: 300 }}
            >
              A pendant that
              <br />
              <em className="not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>listens to your body.</em>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p className="font-body text-[17px] leading-[1.75] max-w-md" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
              Aurra began as a question, not a product — how can a home understand how you feel before you say a word?
            </p>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="flex items-center gap-6 mt-12">
              <Link
                href="/#preorder"
                className="inline-flex items-center justify-center bg-white text-aurra-dark font-body text-[13px] tracking-[0.06em] hover:bg-aurra-off transition-colors duration-200"
                style={{ height: 40, paddingLeft: 24, paddingRight: 24 }}
              >
                Reserve — €299
              </Link>
              <a
                href="#origin"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('origin')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="font-body text-[13px] tracking-[0.04em]"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Read the story ↓
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Scroll hint line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
          className="absolute bottom-0 left-1/2 w-px origin-top"
          style={{ height: 48, background: 'rgba(255,255,255,0.12)', transformOrigin: 'top' }}
        />
      </section>

      {/* ── ORIGIN ────────────────────────────────────────── */}
      <section id="origin" className="py-[120px] px-6 bg-white">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <FadeUp>
              <span className="font-body text-[11px] tracking-[0.16em] uppercase text-aurra-mid block mb-3">Where it started</span>
              <h2
                className="font-display text-aurra-dark leading-tight tracking-[-0.015em]"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300 }}
              >
                Born from a speculative design workshop
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-5">
                {[
                  'Aurra did not start in an engineering lab. It started in a room at the University of Siegen, Germany, where nine people sat around a table and were asked a simple question: if your home could sense your mood, what would you want it to do?',
                  'The answer surprised us. People did not want dramatic, intelligent automation. They wanted something quiet. Something they could trust. Something they could take off.',
                  'Over two and a half hours of icebreakers, provocation cards, role-play scenarios, and paper prototypes, a clear picture emerged. The technology people were willing to accept was not the most capable — it was the most discreet. Not the most accurate — the most controllable. Not the most connected — the most private.',
                  "The pendant was the unanimous result. Both groups, working independently, arrived at the same form: jewellery. Something worn close to the body, invisible to the world, and entirely under the wearer's authority.",
                  'That workshop became the research foundation for Aurra. Every design decision traces back to what those nine people said.',
                ].map((para, i) => (
                  <p key={i} className="font-body text-[15px] text-aurra-mid leading-[1.85]" style={{ fontWeight: 300 }}>{para}</p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="py-[80px] px-6 overflow-hidden" style={{ background: '#f5f5f7' }}>
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-aurra-light">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={0.04 * i}>
                <div className="bg-[#f5f5f7] px-6 py-10 flex flex-col">
                  <span
                    className="font-display text-aurra-dark leading-none mb-3"
                    style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 300 }}
                  >
                    {s.value}
                  </span>
                  <span className="font-body text-[12px] text-aurra-mid leading-snug whitespace-pre-line" style={{ fontWeight: 300 }}>
                    {s.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE ───────────────────────────────────────── */}
      <section className="py-[120px] px-6 bg-white">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-16">
            <FadeUp>
              <span className="font-body text-[11px] tracking-[0.16em] uppercase text-aurra-mid block mb-3">The science</span>
              <h2
                className="font-display text-aurra-dark leading-tight tracking-[-0.015em]"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300 }}
              >
                What Aurra actually reads
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-body text-[15px] text-aurra-mid leading-[1.85]" style={{ fontWeight: 300 }}>
                Aurra does not read your mind. It reads your body — which turns out to be a remarkably honest channel for what is happening in your brain.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-aurra-light">
            {SCIENCE.map((card, i) => (
              <FadeIn key={card.n} delay={0.06 * i}>
                <motion.div
                  whileHover={{ backgroundColor: '#fafafa' }}
                  className="bg-white p-10 flex flex-col gap-4 cursor-default"
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="font-display text-[40px] leading-none"
                      style={{ color: '#e8e8ed', fontWeight: 300 }}
                    >
                      {card.n}
                    </span>
                    <span
                      className="font-body text-[10px] tracking-[0.1em] uppercase border border-aurra-light text-aurra-mid"
                      style={{ padding: '3px 8px' }}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] text-aurra-dark leading-snug" style={{ fontWeight: 400 }}>
                    {card.title}
                  </h3>
                  <p className="font-body text-[14px] text-aurra-mid leading-[1.8]" style={{ fontWeight: 300 }}>
                    {card.body}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────── */}
      <section className="py-[120px] px-6" style={{ background: '#0a0a0b' }}>
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-14">
            <FadeUp>
              <span className="font-body text-[11px] tracking-[0.16em] uppercase block mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                How we decided
              </span>
              <h2
                className="font-display text-white leading-tight tracking-[-0.015em]"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300 }}
              >
                Five principles from the research
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-body text-[15px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
                Every design decision in Aurra was tested against five principles derived from the workshop. These are not brand values. They are research findings.
              </p>
            </FadeUp>
          </div>

          <FadeIn delay={0.15}>
            <PrinciplesAccordion />
          </FadeIn>
        </div>
      </section>

      {/* ── FINDINGS ──────────────────────────────────────── */}
      <section className="py-[120px] px-6 bg-white">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-16">
            <FadeUp>
              <span className="font-body text-[11px] tracking-[0.16em] uppercase text-aurra-mid block mb-3">Workshop findings</span>
              <h2
                className="font-display text-aurra-dark leading-tight tracking-[-0.015em]"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300 }}
              >
                What nine people told us
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              {/* Pull quote */}
              <blockquote
                style={{ borderLeft: '2px solid #1d1d1f', paddingLeft: 20 }}
              >
                <p className="font-display italic text-aurra-dark leading-[1.55]" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400 }}>
                  &ldquo;{QUOTES[0].text}&rdquo;
                </p>
                <footer className="font-body text-[12px] text-aurra-mid mt-3 tracking-[0.04em]" style={{ fontWeight: 300 }}>
                  — {QUOTES[0].credit}
                </footer>
              </blockquote>
            </FadeUp>
          </div>

          {/* More quotes */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {QUOTES.slice(1).map((q, i) => (
              <FadeUp key={i} delay={0.08 * i}>
                <blockquote
                  className="border border-aurra-light p-8 rounded-card"
                  style={{ background: '#fafafa' }}
                >
                  <p className="font-display italic text-aurra-dark leading-[1.6] mb-4" style={{ fontSize: 17, fontWeight: 400 }}>
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer className="font-body text-[12px] text-aurra-mid tracking-[0.03em]" style={{ fontWeight: 300 }}>
                    — {q.credit}
                  </footer>
                </blockquote>
              </FadeUp>
            ))}
          </div>

          {/* Findings */}
          <div className="grid md:grid-cols-3 gap-px bg-aurra-light">
            {FINDINGS.map((f, i) => (
              <FadeIn key={f.title} delay={0.07 * i}>
                <div className="bg-white p-10 flex flex-col gap-3">
                  <span className="font-body text-[11px] tracking-[0.12em] uppercase text-aurra-mid" style={{ fontWeight: 300 }}>{f.label}</span>
                  <h3 className="font-display text-[18px] text-aurra-dark leading-snug" style={{ fontWeight: 400 }}>{f.title}</h3>
                  <p className="font-body text-[14px] text-aurra-mid leading-[1.75]" style={{ fontWeight: 300 }}>{f.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC ──────────────────────────────────────── */}
      <section className="py-[120px] px-6" style={{ background: '#f5f5f7' }}>
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <span className="font-body text-[11px] tracking-[0.16em] uppercase text-aurra-mid block mb-3">Academic foundation</span>
              <h2
                className="font-display text-aurra-dark leading-tight tracking-[-0.015em]"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300 }}
              >
                Research,<br />not guesswork
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-4">
                <p className="font-body text-[15px] text-aurra-mid leading-[1.85]" style={{ fontWeight: 300 }}>
                  Aurra&apos;s design is grounded in a formal speculative design workshop conducted as Project-C, part of the Brain-Computer Interaction seminar at the University of Siegen, Germany, 2026.
                </p>
                <p className="font-body text-[15px] text-aurra-mid leading-[1.85]" style={{ fontWeight: 300 }}>
                  The workshop used established speculative design methodology — icebreaker activities, provocation cards, future scenario discussions, rapid prototyping, and role-play testing — to surface genuine user attitudes toward BCI technology before it is built.
                </p>
                <p className="font-body text-[15px] text-aurra-mid leading-[1.85]" style={{ fontWeight: 300 }}>
                  The full 33-page research report is available on request. It documents every finding, every observation, every design principle, and every rejected concept. We believe in showing our work.
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:shubhrasar7@gmail.com?subject=Research Report Request"
                    className="inline-flex items-center gap-2 font-body text-[14px] text-aurra-dark border-b border-aurra-dark pb-0.5 hover:opacity-50 transition-opacity duration-200"
                    style={{ fontWeight: 400 }}
                  >
                    Request the full research report
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────── */}
      <section className="relative py-[140px] px-6 overflow-hidden" style={{ background: '#0a0a0b' }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(120,100,80,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto text-center" style={{ maxWidth: 640 }}>
          <FadeUp>
            <h2
              className="font-display text-white leading-tight tracking-[-0.025em] mb-6"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 300 }}
            >
              A home that cares
              <br />
              <em className="not-italic" style={{ color: 'rgba(255,255,255,0.4)' }}>without controlling.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="font-body text-[16px] leading-[1.7] mb-10" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
              The goal was never to build a home that thinks for you.
              <br />
              It was to build one that listens.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#preorder"
                className="inline-flex items-center justify-center bg-white text-aurra-dark font-body text-[13px] tracking-[0.06em] hover:bg-aurra-off transition-colors duration-200"
                style={{ height: 44, paddingLeft: 28, paddingRight: 28 }}
              >
                Reserve your Aurra — €299
              </Link>
              <a
                href="mailto:shubhrasar7@gmail.com?subject=Research Report Request"
                className="font-body text-[13px] tracking-[0.04em] hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Request research report →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
