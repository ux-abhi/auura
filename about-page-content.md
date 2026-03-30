# Aurra — About Page Content
# For Claude Code: Use this content to build /app/about/page.tsx

---

## PAGE METADATA
```ts
export const metadata = {
  title: 'About Aurra — The Science Behind the Pendant',
  description:
    'Aurra is a BCI smart pendant that reads your physiological state and gently shifts your home lighting — without a tap. Built on speculative design research from the University of Siegen.',
}
```

---

## SECTION 1 — HERO

**Eyebrow label:** `Research-backed · aurra.io`

**Headline:**
```
A pendant that
listens to your body.
```

**Sub:**
```
Aurra began as a question, not a product.
How can a home understand how you feel
before you say a word?
```

---

## SECTION 2 — ORIGIN STORY

**Label:** `Where it started`

**Headline:** `Born from a speculative design workshop`

**Body:**
```
Aurra did not start in an engineering lab. It started in a room at the University of Siegen, Germany, where nine people sat around a table and were asked a simple question: if your home could sense your mood, what would you want it to do?

The answer surprised us. People did not want dramatic, intelligent automation. They wanted something quiet. Something they could trust. Something they could take off.

Over two and a half hours of icebreakers, provocation cards, role-play scenarios, and paper prototypes, a clear picture emerged. The technology people were willing to accept was not the most capable — it was the most discreet. Not the most accurate — the most controllable. Not the most connected — the most private.

The pendant was the unanimous result. Both groups, working independently, arrived at the same form: jewellery. Something worn close to the body, invisible to the world, and entirely under the wearer's authority.

That workshop became the research foundation for Aurra. Every design decision traces back to what those nine people said.
```

---

## SECTION 3 — THE RESEARCH (3-column stat strip)

**Stats to display as large numbers with labels:**

| Stat | Label |
|------|-------|
| 9 | workshop participants |
| 2.5 hrs | of structured research |
| 13 | device concepts evaluated |
| 100% | voted pendant as Tier 1 |
| 7 | role-play scenarios tested |
| 5 | core design principles |

---

## SECTION 4 — THE SCIENCE

**Label:** `The science`

**Headline:** `What Aurra actually reads`

**Body intro:**
```
Aurra does not read your mind. It reads your body — which turns out to be a remarkably honest
channel for what is happening in your brain.
```

**Four science cards (display as 2×2 grid):**

### Card 1 — HRV & the vagus nerve
**Title:** `Heart rate variability`
**Body:**
```
The vagus nerve is the brain's long-distance cable to the body. It carries emotional state signals from the limbic system down through the neck and chest, regulating heart rhythm, breathing, and gut response.

A pendant at the sternum can read heart rate variability (HRV) — the variation in time between heartbeats — which is a direct functional readout of vagal tone. High HRV means calm, positive affect. Low HRV means stress and negative valence. This is not metaphorical. It is a physical wire the brain uses to regulate emotional state.
```
**Tag:** `Cardiac · PPG optical sensor`

### Card 2 — EDA & arousal
**Title:** `Electrodermal activity`
**Body:**
```
Sweat glands are controlled entirely by the sympathetic nervous system — the same system that activates during stress, excitement, or surprise. Electrodermal activity (EDA) measures tiny changes in skin conductance caused by sweat gland activity.

EDA spikes before conscious awareness of emotion. It is one of the fastest physiological emotion signals available, making it ideal for detecting mood shifts as they happen rather than after they are established.
```
**Tag:** `Sympathetic nervous system · dry electrodes`

### Card 3 — Circumplex mood model
**Title:** `The Russell circumplex`
**Body:**
```
Aurra does not try to name your emotion. It plots your state on two continuous axes: valence (negative to positive) and arousal (low to high). This is the Russell circumplex model of affect — a scientifically validated framework that maps emotional states as a continuous space rather than discrete categories.

This approach is more honest about what physiological sensing can and cannot do. HRV and EDA cannot reliably distinguish "happy" from "excited". They can reliably distinguish high-arousal positive from low-arousal negative. The circumplex respects that limit.
```
**Tag:** `Affective science · J.A. Russell, 1980`

### Card 4 — TinyML on-device
**Title:** `On-device inference`
**Body:**
```
All signal processing and mood inference happens on the pendant's ARM Cortex-M33 processor. A compressed INT8 neural network model — under 400 KB — fuses signals from all active sensor channels into a circumplex position in under 80 milliseconds.

No raw biometric data is transmitted. Not to the companion app. Not to a server. Not anywhere. The only thing that leaves the pendant via BLE is the inferred mood position: two floating-point numbers and a lighting preset ID.

Raw biometrics never leave the pendant. This is not a privacy policy. It is a technical constraint.
```
**Tag:** `ARM Cortex-M33 · INT8 · BLE 5.2`

---

## SECTION 5 — DESIGN PRINCIPLES

**Label:** `How we decided`

**Headline:** `Five principles from the research`

**Body intro:**
```
Every design decision in Aurra was tested against five principles derived from the workshop.
These are not brand values. They are research findings.
```

**Five principles (display as vertical list with large numbers):**

**01 — Subtlety over visibility**
```
Lighting changes should be felt, not noticed. Participants consistently rejected dramatic
transitions — even when they were technically appropriate. The invisibility threshold
is the primary design criterion: if you notice the light changed, we moved too fast.
```

**02 — Assistance over automation**
```
The system proposes. You decide. Aurra never acts on your environment without
passive or active consent. A gentle haptic suggests a change. Doing nothing for
three seconds accepts it. One tap modifies it. Two taps snooze it for 30 minutes.
Trust is built through correct proposals, not through overriding demonstrated preferences.
```

**03 — Ownership over data extraction**
```
Your biometric and mood data belongs to you. It lives on the pendant. You can delete
all of it in a single tap. There are no accounts required. There is no cloud sync by default.
There is no third party that ever sees your data. The emotional history feature
is yours — a personal journal, not a system asset.
```

**04 — Wearability over invasiveness**
```
The form factor must integrate into existing daily life without requiring new practices
or drawing social attention. Three criteria: passive (no active maintenance),
removable (off in under five seconds), socially invisible (looks like jewellery,
because it is jewellery). Devices that fail any of these were rejected in the research.
```

**05 — Control over intelligence**
```
A less accurate system with high user control is better than a more accurate system
with low user control. Aurra's intelligence is not measured by inference accuracy alone.
It is measured by the quality of its collaboration with you. You can override it instantly,
always, without explanation.
```

---

## SECTION 6 — WHAT THE RESEARCH FOUND

**Label:** `Workshop findings`

**Headline:** `What nine people told us`

**Pull quotes — display as large serif blockquotes:**

```
"I don't mind if it watches me, as long as I can also watch what it knows."
— Workshop participant, provocation card session
```

```
"I would start constantly thinking about what my blood pressure is doing."
— On visible emotional feedback to others
```

```
"It's not a gadget. It feels more like something you'd inherit."
— On the jewellery form factor
```

**Finding cards (3-column):**

**Finding 1 — The two-stage morning**
```
Every participant who addressed the morning wake-up scenario independently proposed
the same two-stage sequence: calm warm amber first, then brighter neutral white
once the user signals readiness. Neither group knew the other had proposed it.
This became a core Aurra default mode.
```

**Finding 2 — The gaslighting effect**
```
When the AI overrode a user's manual lighting choice, participants used the word
"gaslit" spontaneously in both groups. A system that insists it understands you
better than you understand yourself does not just fail usability — it damages
epistemic self-trust. Aurra never insists. It yields instantly and without negotiation.
```

**Finding 3 — The pendant paradox**
```
Brain implants scored highest on sensing capability and lowest on social acceptance.
The pendant scored second on sensing and first on acceptance. The lesson: in everyday
BCI, good-enough sensing in an acceptable form factor beats high-fidelity sensing
in an unacceptable one. Aurra is the best available synthesis of these two constraints.
```

---

## SECTION 7 — TEAM / ACADEMIC ORIGIN

**Label:** `Academic foundation`

**Headline:** `Research, not guesswork`

**Body:**
```
Aurra's design is grounded in a formal speculative design workshop conducted as Project-C,
part of the Brain-Computer Interaction seminar at the University of Siegen, Germany, 2026.
The workshop was designed using established speculative design methodology — icebreaker
activities, provocation cards, future scenario discussions, rapid prototyping, and role-play
testing — to surface genuine user attitudes toward BCI technology before it is built.

The full 33-page research report is available on request. It documents every finding,
every observation, every design principle, and every rejected concept. We believe in
showing our work.
```

**CTA:** `Request the full research report →`  (links to mailto:research@aurra.io)

---

## SECTION 8 — CLOSING CTA

**Headline:** `A home that cares without controlling.`

**Sub:**
```
The goal was never to build a home that thinks for you.
It was to build one that listens.
```

**Button:** `Reserve your Aurra →` (links to /#preorder)

---

## COMPONENT NOTES FOR CLAUDE CODE

- Use `Playfair Display` for all headlines and blockquotes
- Use `Instrument Sans` for all body text, labels, tags
- Colour palette: white `#ffffff`, off-white `#f5f5f7`, dark `#1d1d1f`, mid `#6e6e73`
- Science cards: 1px border `#e8e8ed`, hover lift `-4px`, border-radius `18px`
- Pull quotes: large serif, `#1d1d1f`, left border `3px solid #1d1d1f`, padding-left `24px`
- Stat numbers: Playfair Display, `80px`, font-weight `300`, color `#1d1d1f`
- All sections use `scroll reveal` (fadeUp, y:30, duration 0.8s, once:true)
- Max content width: `980px`, centered
- Section vertical padding: `120px`
