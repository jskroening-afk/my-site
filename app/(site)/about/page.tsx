import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    '1:1 coaching for founders and leaders in seasons of tension, transition, and lonely decision-making.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="px-6 lg:px-8 pt-48 pb-16 lg:pt-56 lg:pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.1] text-[#f5f0e8] max-w-4xl">
            You already know something is off.<br />
            You just haven&apos;t had the space to say it out loud.
          </h1>
        </div>
      </section>

      {/* ── Hero subline ── */}
      <section className="px-6 lg:px-8 pb-28 lg:pb-36">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#7a8099] text-center mt-8">
            That&apos;s usually where this work begins.
          </p>
        </div>
      </section>

      {/* ── Section 2: Narrow prose ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-24 border-t border-[#1e2538]">
        <div
          className="mx-auto space-y-6 text-[#7a8099] text-[0.95rem]"
          style={{ maxWidth: '520px', lineHeight: '1.8' }}
        >
          <p>I&apos;ve spent my whole life in the in-between.</p>
          <p>
            Between people who disagree. Between what a role demands and what a person can carry.
            Between what&apos;s working on paper and what&apos;s quietly falling apart underneath.
          </p>
          <p>
            I didn&apos;t choose that position. It chose me. In every room I&apos;ve ever been in &mdash; a
            small business, a hospital, a nonprofit, a school, a publishing house &mdash; I&apos;ve been
            the one people come to when they need to think something through, cool something down,
            or finally say the thing they haven&apos;t been able to say out loud.
          </p>
          <p>
            For a long time, I thought that was just who I was. A useful person. A good listener.
            Someone who could hold complexity without flinching.
          </p>
        </div>
      </section>

      {/* ── Section 3: Pull quote ── */}
      <section className="px-6 lg:px-8" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-serif font-normal italic leading-snug"
            style={{ fontSize: '2.25rem', color: '#C8B89A' }}
          >
            &ldquo;What I didn&apos;t realize was that I was also quietly burning.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Section 4: Label — "What shapes the work" ── */}
      <section className="px-6 lg:px-8" style={{ marginTop: '80px', paddingBottom: '40px' }}>
        <div className="max-w-[680px] mx-auto">
          <p
            className="font-medium"
            style={{
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#666666',
            }}
          >
            What shapes the work
          </p>
        </div>
      </section>

      {/* ── Section 5: Body prose ── */}
      <section className="px-6 lg:px-8 pb-24 lg:pb-32">
        <div
          className="mx-auto text-[#7a8099] text-[0.95rem]"
          style={{ maxWidth: '680px', lineHeight: '1.85' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p>
              A few years ago, I was doing work I genuinely loved &mdash; leading editorial direction
              at a small media company, surrounded by books and meaningful stories and people who
              cared deeply about what they were building. On the surface, it looked like the right fit.
            </p>
            <p>
              Underneath: I wasn&apos;t sleeping. I couldn&apos;t stop thinking about everything that needed
              to be fixed &mdash; in the business, in my role, in me. I was the diplomatic voice between
              strongly opinionated people, day after day, absorbing everyone&apos;s tension while mine
              kept building. My relationships were fraying. I wasn&apos;t present with my family. I was
              either burned out or very close to it, and I wasn&apos;t sure I could tell the difference
              anymore.
            </p>
            <p>
              What helped wasn&apos;t a productivity system or a better morning routine. It was a
              combination of therapy, a few honest friendships, intentional silence, and &mdash; for the
              first time &mdash; my own coach. Someone who could see me clearly and help me tell the
              truth about what was actually happening.
            </p>
            <p>
              That experience didn&apos;t just change how I worked. It changed what I understood about
              the work I&apos;d always been doing for others &mdash; and what it could actually become.
            </p>
            <p>
              I&apos;ve been drawn to questions of interiority &mdash; who we are beneath what we perform,
              what actually shapes a person, what it means to become more fully human &mdash; since I
              was young. Those questions drove me through an eclectic career: painting company
              operations, healthcare, real estate, education, mentoring, nonprofits, publishing.
              Different industries, different problems, different people.
            </p>
            <p>
              The thread running through all of it was the same: someone needed to be seen. And I
              kept being the person who tried to do that.
            </p>
            <p>
              Along the way, I&apos;ve been shaped by embodied and contemplative practices &mdash; a
              tradition-anchored approach to inner life that takes the whole person seriously: body,
              mind, spirit, and the particular pressures of the world you&apos;re living in.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Label — "A few things worth sharing" ── */}
      <section className="px-6 lg:px-8" style={{ marginTop: '80px', paddingBottom: '40px' }}>
        <div className="max-w-[680px] mx-auto">
          <p
            className="font-medium"
            style={{
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#666666',
            }}
          >
            A few things worth sharing
          </p>
        </div>
      </section>

      {/* ── Section 7: Personal paragraphs ── */}
      <section className="px-6 lg:px-8 pb-24 lg:pb-32">
        <div
          className="mx-auto text-[#7a8099] text-[0.95rem]"
          style={{ maxWidth: '680px', lineHeight: '1.85' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p>
              I&apos;m based in Minneapolis. I&apos;m married with three daughters. I love books more than
              is probably reasonable.
            </p>
            <p>
              I find that the most important things tend to reveal themselves slowly &mdash; in extended
              conversations, on long walks, next to a campfire. If we end up working together,
              I&apos;ll tell you more stories than you can handle. But I&apos;ve learned that the deeper
              places are better explored face to face.
            </p>
            <p>Which is, in a way, the whole point.</p>
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ── */}
      <section className="px-6 lg:px-8 pb-28 lg:pb-36" style={{ marginTop: '80px' }}>
        <div className="max-w-[680px] mx-auto">
          <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', marginBottom: '80px' }} />
          <p
            className="text-[#7a8099] text-[0.95rem] mb-10"
            style={{ lineHeight: '1.85' }}
          >
            If any of this resonates, the discovery call is a real conversation &mdash; not a sales
            pitch. Forty-five minutes to see whether the work makes sense for where you are
            right now.
          </p>
          <Link
            href="/services/executive-coaching"
            className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
          >
            Book a discovery call
          </Link>
        </div>
      </section>
    </>
  )
}
