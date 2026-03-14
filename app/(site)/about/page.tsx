import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    '1:1 coaching for founders and leaders in seasons of tension, transition, and lonely decision-making.',
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>

      {/* Hero */}
      <section style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <h1
          className="font-serif font-normal text-white"
          style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)', lineHeight: '1.15', marginBottom: '24px' }}
        >
          <span style={{ display: 'block' }}>You already know something is off.</span>
          <span style={{ display: 'block', marginTop: '8px' }}>You just haven&apos;t had the space to say it out loud.</span>
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#999999', lineHeight: '1.6' }}>
          That&apos;s usually where this work begins.
        </p>
      </section>

      {/* Prose */}
      <section style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e8e8', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p>I&apos;ve spent my whole life in the in-between.</p>
          <p>Between people who disagree. Between what a role demands and what a person can carry. Between what&apos;s working on paper and what&apos;s quietly falling apart underneath.</p>
          <p>I didn&apos;t choose that position. It chose me. In every room I&apos;ve ever been in &mdash; a small business, a hospital, a nonprofit, a school, a publishing house &mdash; I&apos;ve been the one people come to when they need to think something through, cool something down, or finally say the thing they haven&apos;t been able to say out loud.</p>
          <p>For a long time, I thought that was just who I was. A useful person. A good listener. Someone who could hold complexity without flinching.</p>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <p
          className="font-serif font-normal italic"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.4', color: '#C8B89A' }}
        >
          &ldquo;What I didn&apos;t realize was that I was also quietly burning.&rdquo;
        </p>
      </section>

      {/* Label */}
      <section style={{ paddingTop: '60px', paddingBottom: '20px' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888888', fontWeight: 500 }}>What shapes the work</p>
      </section>

      {/* Body prose */}
      <section style={{ paddingBottom: '60px' }}>
        <div style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e8e8', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p>A few years ago, I was doing work I genuinely loved &mdash; leading editorial direction at a small media company, surrounded by books and meaningful stories and people who cared deeply about what they were building. On the surface, it looked like the right fit.</p>
          <p>Underneath: I wasn&apos;t sleeping. I couldn&apos;t stop thinking about everything that needed to be fixed &mdash; in the business, in my role, in me. I was the diplomatic voice between strongly opinionated people, day after day, absorbing everyone&apos;s tension while mine kept building. My relationships were fraying. I wasn&apos;t present with my family. I was either burned out or very close to it, and I wasn&apos;t sure I could tell the difference anymore.</p>
          <p>What helped wasn&apos;t a productivity system or a better morning routine. It was a combination of therapy, a few honest friendships, intentional silence, and &mdash; for the first time &mdash; my own coach. Someone who could see me clearly and help me tell the truth about what was actually happening.</p>
          <p>That experience didn&apos;t just change how I worked. It changed what I understood about the work I&apos;d always been doing for others &mdash; and what it could actually become.</p>
          <p>I&apos;ve been drawn to questions of interiority &mdash; who we are beneath what we perform, what actually shapes a person, what it means to become more fully human &mdash; since I was young. Those questions drove me through an eclectic career: painting company operations, healthcare, real estate, education, mentoring, nonprofits, publishing. Different industries, different problems, different people.</p>
          <p>The thread running through all of it was the same: someone needed to be seen. And I kept being the person who tried to do that.</p>
          <p>Along the way, I&apos;ve been shaped by embodied and contemplative practices &mdash; a tradition-anchored approach to inner life that takes the whole person seriously: body, mind, spirit, and the particular pressures of the world you&apos;re living in.</p>
        </div>
      </section>

      {/* Label */}
      <section style={{ paddingTop: '60px', paddingBottom: '20px' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888888', fontWeight: 500 }}>A few things worth sharing</p>
      </section>

      {/* Personal */}
      <section style={{ paddingBottom: '60px' }}>
        <div style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e8e8', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p>I&apos;m based in Minneapolis. I&apos;m married with three daughters. I love books more than is probably reasonable.</p>
          <p>I find that the most important things tend to reveal themselves slowly &mdash; in extended conversations, on long walks, next to a campfire. If we end up working together, I&apos;ll tell you more stories than you can handle. But I&apos;ve learned that the deeper places are better explored face to face.</p>
          <p>Which is, in a way, the whole point.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', marginBottom: '60px' }} />
        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e8e8', marginBottom: '40px' }}>
          If any of this resonates, the discovery call is a real conversation &mdash; not a sales pitch. Forty-five minutes to see whether the work makes sense for where you are right now.
        </p>
        <Link
          href="/services/executive-coaching"
          className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
        >
          Book a discovery call
        </Link>
      </section>

    </div>
  )
}
