import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leadership Coaching',
  description:
    'Ongoing one-to-one conversations for leaders navigating demanding work, difficult decisions, and the deeper questions shaping their lives and leadership.',
}

const deliverables = [
  {
    title: 'Weekly Coaching Conversations',
    desc: 'Regular one-hour sessions designed to explore the real challenges and decisions you\'re facing in work and life.',
  },
  {
    title: 'A Trusted Thinking Partner',
    desc: 'A confidential space where you can speak freely, examine ideas honestly, and explore questions that rarely have simple answers.',
  },
  {
    title: 'Clarity Around Decisions',
    desc: 'Many conversations center around difficult choices — helping you see your situation clearly and move forward with confidence.',
  },
  {
    title: 'Leadership and Personal Reflection',
    desc: 'Leadership inevitably intersects with identity, responsibility, and purpose. Our work reflects that reality.',
  },
  {
    title: 'Ongoing Perspective',
    desc: 'Consistent dialogue over time helps you see patterns, recognize blind spots, and develop greater self-awareness as a leader.',
  },
  {
    title: 'Optional Strategic Exploration',
    desc: 'When appropriate, we may also explore strategic questions related to your organization, role, or long-term direction.',
  },
]

const forWho = [
  'Founders and executives navigating complex decisions.',
  'Leaders entering a new season of responsibility or transition.',
  'Individuals wrestling with deeper questions about work, meaning, or direction.',
  'People who value honest conversation over easy answers.',
]

const steps = [
  {
    num: '01',
    title: 'Introductory Conversation',
    desc: 'We begin with a short call to explore what you\'re navigating and determine whether this work would be helpful.',
  },
  {
    num: '02',
    title: 'Initial Orientation',
    desc: 'If we decide to work together, we begin with a longer conversation exploring your current challenges, responsibilities, and priorities.',
  },
  {
    num: '03',
    title: 'Ongoing Coaching',
    desc: 'We meet regularly for focused conversations designed to help you think clearly and navigate the decisions in front of you.',
  },
  {
    num: '04',
    title: 'Periodic Reflection',
    desc: 'At natural intervals, we step back to reflect on what has shifted and what the next season of work may require.',
  },
]

export default function ExecutiveCoachingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[#06080f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
                Leadership Coaching
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#f5f0e8]">
                Ongoing conversations for leaders carrying real responsibility.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#7a8099] leading-relaxed text-sm">
                Leadership brings complex decisions, competing demands, and often very little space to think clearly.
              </p>
              <p className="text-[#7a8099] leading-relaxed text-sm mt-4">
                Leadership Coaching provides that space — a steady rhythm of thoughtful dialogue designed to help you lead with clarity, courage, and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-[#1a2035] w-full" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                Overview
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] mb-7 leading-tight">
                Leadership requires more than skill.
              </h2>
              <div className="space-y-4 text-[#7a8099] leading-relaxed text-sm">
                <p>
                  Many leaders are surrounded by advice, expectations, and constant pressure to perform.
                </p>
                <p>
                  What they rarely have is a space to think honestly about the deeper questions shaping their leadership and their lives.
                </p>
                <p>
                  Leadership Coaching provides that space.
                </p>
                <p>
                  Through ongoing one-to-one conversations, we explore the decisions, tensions, and responsibilities you&apos;re carrying — helping you think clearly, act deliberately, and lead in a way that is aligned with who you truly are.
                </p>
                <p>
                  Over time, this work builds not just better leadership, but deeper clarity and confidence about the path you are walking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#0f1525]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              What&apos;s Included
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight max-w-xl">
              A steady rhythm of thoughtful conversation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e2538]">
            {deliverables.map((item, i) => (
              <div key={i} className="bg-[#0f1525] p-7 lg:p-8">
                <div className="w-8 h-px bg-[#8B7A6A] mb-5" />
                <h3 className="text-sm font-medium text-[#f5f0e8] mb-2">{item.title}</h3>
                <p className="text-xs text-[#7a8099] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
                Who It&apos;s For
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight">
                For leaders carrying meaningful responsibility.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-0">
                {forWho.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-5 py-5 ${
                      i < forWho.length - 1 ? 'border-b border-[#1e2538]' : ''
                    }`}
                  >
                    <span className="text-[#8B7A6A] mt-0.5 flex-shrink-0">→</span>
                    <span className="text-[#f5f0e8] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              How It Works
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight max-w-xl">
              A steady conversation over time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e2538]">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#0a0e1a] p-7 lg:p-8">
                <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#f5f0e8] mt-5 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-[#7a8099] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#06080f]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
            Apply Now
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#f5f0e8] mb-7 leading-tight">
            Leadership is demanding work.
          </h2>
          <div className="text-[#7a8099] text-sm leading-relaxed mb-10 max-w-md mx-auto space-y-4">
            <p>Few leaders have a space where they can speak honestly, think clearly, and examine the deeper questions shaping their lives and work.</p>
            <p>Leadership Coaching creates that space.</p>
            <p>I work with a limited number of clients at a time in order to keep the work thoughtful and personal.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@yourname.com"
              className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
            >
              Schedule an Intro Conversation →
            </Link>
            <Link
              href="/services/strategic-advisory"
              className="inline-block px-8 py-4 border border-[#1e2538] text-[#f5f0e8] text-sm font-medium hover:border-[#8B7A6A] hover:text-[#8B7A6A] transition-colors"
            >
              View Other Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
