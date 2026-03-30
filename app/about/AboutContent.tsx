'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import StatStrip from '@/components/ui/StatStrip'
import ScienceCard from '@/components/ui/ScienceCard'

const EASE = [0.22, 1, 0.36, 1] as const

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const STATS = [
  { value: '9', label: 'workshop participants' },
  { value: '2.5 hrs', label: 'of structured research' },
  { value: '13', label: 'device concepts evaluated' },
  { value: '100%', label: 'voted pendant as Tier 1' },
  { value: '7', label: 'role-play scenarios tested' },
  { value: '5', label: 'core design principles' },
]

const SCIENCE_CARDS = [
  {
    title: 'Heart rate variability',
    body: 'The vagus nerve is the brain\'s long-distance cable to the body. It carries emotional state signals from the limbic system down through the neck and chest, regulating heart rhythm, breathing, and gut response.\n\nA pendant at the sternum can read heart rate variability (HRV) — the variation in time between heartbeats — which is a direct functional readout of vagal tone. High HRV means calm, positive affect. Low HRV means stress and negative valence. This is not metaphorical. It is a physical wire the brain uses to regulate emotional state.',
    tag: 'Cardiac · PPG optical sensor',
  },
  {
    title: 'Electrodermal activity',
    body: 'Sweat glands are controlled entirely by the sympathetic nervous system — the same system that activates during stress, excitement, or surprise. Electrodermal activity (EDA) measures tiny changes in skin conductance caused by sweat gland activity.\n\nEDA spikes before conscious awareness of emotion. It is one of the fastest physiological emotion signals available, making it ideal for detecting mood shifts as they happen rather than after they are established.',
    tag: 'Sympathetic nervous system · dry electrodes',
  },
  {
    title: 'The Russell circumplex',
    body: 'Aurra does not try to name your emotion. It plots your state on two continuous axes: valence (negative to positive) and arousal (low to high). This is the Russell circumplex model of affect — a scientifically validated framework that maps emotional states as a continuous space rather than discrete categories.\n\nThis approach is more honest about what physiological sensing can and cannot do. HRV and EDA cannot reliably distinguish "happy" from "excited". They can reliably distinguish high-arousal positive from low-arousal negative. The circumplex respects that limit.',
    tag: 'Affective science · J.A. Russell, 1980',
  },
  {
    title: 'On-device inference',
    body: 'All signal processing and mood inference happens on the pendant\'s ARM Cortex-M33 processor. A compressed INT8 neural network model — under 400 KB — fuses signals from all active sensor channels into a circumplex position in under 80 milliseconds.\n\nNo raw biometric data is transmitted. Not to the companion app. Not to a server. Not anywhere. The only thing that leaves the pendant via BLE is the inferred mood position: two floating-point numbers and a lighting preset ID.\n\nRaw biometrics never leave the pendant. This is not a privacy policy. It is a technical constraint.',
    tag: 'ARM Cortex-M33 · INT8 · BLE 5.2',
  },
]

const PRINCIPLES = [
  {
    num: '01',
    title: 'Subtlety over visibility',
    body: 'Lighting changes should be felt, not noticed. Participants consistently rejected dramatic transitions — even when they were technically appropriate. The invisibility threshold is the primary design criterion: if you notice the light changed, we moved too fast.',
  },
  {
    num: '02',
    title: 'Assistance over automation',
    body: 'The system proposes. You decide. Aurra never acts on your environment without passive or active consent. A gentle haptic suggests a change. Doing nothing for three seconds accepts it. One tap modifies it. Two taps snooze it for 30 minutes. Trust is built through correct proposals, not through overriding demonstrated preferences.',
  },
  {
    num: '03',
    title: 'Ownership over data extraction',
    body: 'Your biometric and mood data belongs to you. It lives on the pendant. You can delete all of it in a single tap. There are no accounts required. There is no cloud sync by default. There is no third party that ever sees your data. The emotional history feature is yours — a personal journal, not a system asset.',
  },
  {
    num: '04',
    title: 'Wearability over invasiveness',
    body: 'The form factor must integrate into existing daily life without requiring new practices or drawing social attention. Three criteria: passive (no active maintenance), removable (off in under five seconds), socially invisible (looks like jewellery, because it is jewellery). Devices that fail any of these were rejected in the research.',
  },
  {
    num: '05',
    title: 'Control over intelligence',
    body: "A less accurate system with high user control is better than a more accurate system with low user control. Aurra's intelligence is not measured by inference accuracy alone. It is measured by the quality of its collaboration with you. You can override it instantly, always, without explanation.",
  },
]

const PULL_QUOTES = [
  { text: "I don't mind if it watches me, as long as I can also watch what it knows.", credit: 'Workshop participant, provocation card session' },
  { text: "I would start constantly thinking about what my blood pressure is doing.", credit: 'On visible emotional feedback to others' },
  { text: "It's not a gadget. It feels more like something you'd inherit.", credit: 'On the jewellery form factor' },
]

const FINDINGS = [
  {
    title: 'The two-stage morning',
    body: 'Every participant who addressed the morning wake-up scenario independently proposed the same two-stage sequence: calm warm amber first, then brighter neutral white once the user signals readiness. Neither group knew the other had proposed it. This became a core Aurra default mode.',
  },
  {
    title: 'The gaslighting effect',
    body: 'When the AI overrode a user\'s manual lighting choice, participants used the word "gaslit" spontaneously in both groups. A system that insists it understands you better than you understand yourself does not just fail usability — it damages epistemic self-trust. Aurra never insists. It yields instantly and without negotiation.',
  },
  {
    title: 'The pendant paradox',
    body: 'Brain implants scored highest on sensing capability and lowest on social acceptance. The pendant scored second on sensing and first on acceptance. The lesson: in everyday BCI, good-enough sensing in an acceptable form factor beats high-fidelity sensing in an unacceptable one. Aurra is the best available synthesis of these two constraints.',
  },
]

export default function AboutContent() {
  return (
    <main className="bg-white pt-[52px]">
      {/* SECTION 1 — HERO */}
      <section className="py-[120px] px-6">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp>
            <span className="font-body text-[12px] tracking-[0.12em] uppercase text-aurra-mid">Research-backed · aurra.io</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="font-display text-aurra-dark mt-5 leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 300 }}
            >
              A pendant that
              <br />
              listens to your body.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-body text-[18px] text-aurra-mid leading-[1.7] mt-8" style={{ maxWidth: 540 }}>
              Aurra began as a question, not a product.
              <br />
              How can a home understand how you feel
              <br />
              before you say a word?
            </p>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2 — ORIGIN */}
      <section className="py-[120px] px-6 bg-aurra-off">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp>
            <span className="font-body text-[12px] tracking-[0.12em] uppercase text-aurra-mid">Where it started</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display text-aurra-dark mt-4 mb-10 leading-tight tracking-[-0.015em]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300 }}
            >
              Born from a speculative design workshop
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-10">
            <FadeUp delay={0.1}>
              <p className="font-body text-[16px] text-aurra-mid leading-[1.8]">
                Aurra did not start in an engineering lab. It started in a room at the University of Siegen, Germany, where nine people sat around a table and were asked a simple question: if your home could sense your mood, what would you want it to do?
              </p>
              <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mt-5">
                The answer surprised us. People did not want dramatic, intelligent automation. They wanted something quiet. Something they could trust. Something they could take off.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-body text-[16px] text-aurra-mid leading-[1.8]">
                Over two and a half hours of icebreakers, provocation cards, role-play scenarios, and paper prototypes, a clear picture emerged. The technology people were willing to accept was not the most capable — it was the most discreet. Not the most accurate — the most controllable. Not the most connected — the most private.
              </p>
              <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mt-5">
                The pendant was the unanimous result. Both groups, working independently, arrived at the same form: jewellery. Something worn close to the body, invisible to the world, and entirely under the wearer&apos;s authority.
              </p>
              <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mt-5">
                That workshop became the research foundation for Aurra. Every design decision traces back to what those nine people said.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 3 — STATS */}
      <section className="py-[120px] px-6">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp>
            <StatStrip stats={STATS} />
          </FadeUp>
        </div>
      </section>

      {/* SECTION 4 — SCIENCE */}
      <section className="py-[120px] px-6 bg-aurra-off">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp>
            <span className="font-body text-[12px] tracking-[0.12em] uppercase text-aurra-mid">The science</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display text-aurra-dark mt-4 mb-4 leading-tight tracking-[-0.015em]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300 }}
            >
              What Aurra actually reads
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-12" style={{ maxWidth: 600 }}>
              Aurra does not read your mind. It reads your body — which turns out to be a remarkably honest channel for what is happening in your brain.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {SCIENCE_CARDS.map((card, i) => (
              <FadeUp key={card.title} delay={0.05 * i}>
                <ScienceCard title={card.title} body={card.body} tag={card.tag} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRINCIPLES */}
      <section className="py-[120px] px-6">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp>
            <span className="font-body text-[12px] tracking-[0.12em] uppercase text-aurra-mid">How we decided</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display text-aurra-dark mt-4 mb-4 leading-tight tracking-[-0.015em]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300 }}
            >
              Five principles from the research
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-body text-[16px] text-aurra-mid leading-[1.8] mb-14" style={{ maxWidth: 560 }}>
              Every design decision in Aurra was tested against five principles derived from the workshop. These are not brand values. They are research findings.
            </p>
          </FadeUp>
          <div className="space-y-0">
            {PRINCIPLES.map((p, i) => (
              <FadeUp key={p.num} delay={0.05 * i}>
                <div className="py-10 border-t border-aurra-light grid md:grid-cols-[200px_1fr] gap-6">
                  <div>
                    <span
                      className="font-display text-aurra-dark leading-none"
                      style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, opacity: 0.15 }}
                    >
                      {p.num}
                    </span>
                    <h3 className="font-display text-[20px] font-normal text-aurra-dark mt-1 leading-snug">{p.title}</h3>
                  </div>
                  <p className="font-body text-[15px] text-aurra-mid leading-[1.8] self-center">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WORKSHOP FINDINGS */}
      <section className="py-[120px] px-6 bg-aurra-off">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp>
            <span className="font-body text-[12px] tracking-[0.12em] uppercase text-aurra-mid">Workshop findings</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display text-aurra-dark mt-4 mb-14 leading-tight tracking-[-0.015em]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300 }}
            >
              What nine people told us
            </h2>
          </FadeUp>

          {/* Pull quotes */}
          <div className="space-y-8 mb-16">
            {PULL_QUOTES.map((q, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <blockquote
                  className="font-display italic text-aurra-dark leading-[1.5]"
                  style={{
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    borderLeft: '3px solid #1d1d1f',
                    paddingLeft: 24,
                    fontWeight: 400,
                  }}
                >
                  <p>&ldquo;{q.text}&rdquo;</p>
                  <footer className="font-body text-[13px] text-aurra-mid not-italic mt-2 tracking-[0.02em]">
                    — {q.credit}
                  </footer>
                </blockquote>
              </FadeUp>
            ))}
          </div>

          {/* Finding cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {FINDINGS.map((f, i) => (
              <FadeUp key={f.title} delay={0.05 * i}>
                <div className="bg-white border border-aurra-light rounded-card p-8 h-full">
                  <h3 className="font-display text-[18px] font-normal text-aurra-dark mb-4 leading-snug">{f.title}</h3>
                  <p className="font-body text-[14px] text-aurra-mid leading-[1.7]">{f.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — ACADEMIC */}
      <section className="py-[120px] px-6">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <div className="grid md:grid-cols-2 gap-16">
            <FadeUp>
              <span className="font-body text-[12px] tracking-[0.12em] uppercase text-aurra-mid">Academic foundation</span>
              <h2
                className="font-display text-aurra-dark mt-4 mb-6 leading-tight tracking-[-0.015em]"
                style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 300 }}
              >
                Research, not guesswork
              </h2>
              <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mb-4">
                Aurra&apos;s design is grounded in a formal speculative design workshop conducted as Project-C, part of the Brain-Computer Interaction seminar at the University of Siegen, Germany, 2026. The workshop was designed using established speculative design methodology — icebreaker activities, provocation cards, future scenario discussions, rapid prototyping, and role-play testing — to surface genuine user attitudes toward BCI technology before it is built.
              </p>
              <p className="font-body text-[15px] text-aurra-mid leading-[1.8] mb-8">
                The full 33-page research report is available on request. It documents every finding, every observation, every design principle, and every rejected concept. We believe in showing our work.
              </p>
              <a
                href="mailto:research@aurra.io?subject=Research Report Request"
                className="font-body text-[14px] text-aurra-dark tracking-[0.02em] hover:opacity-60 transition-opacity duration-200 inline-flex items-center gap-2"
              >
                Request the full research report →
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLOSING CTA */}
      <section className="py-[120px] px-6 bg-aurra-dark">
        <div className="mx-auto text-center" style={{ maxWidth: 720 }}>
          <FadeUp>
            <h2
              className="font-display text-white leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 300 }}
            >
              A home that cares without controlling.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-body text-[17px] mt-6 mb-10 leading-[1.7]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The goal was never to build a home that thinks for you.
              <br />
              It was to build one that listens.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link
              href="/#preorder"
              className="inline-flex items-center justify-center bg-white text-aurra-dark font-body text-[14px] tracking-[0.06em] px-8 py-3 hover:bg-aurra-off transition-colors duration-200"
            >
              Reserve your Aurra →
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
