import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Private Intensive',
  description:
    'A focused, in-person, full-day engagement designed to create clarity around the decisions, challenges, and questions that matter most.',
}

const deliverables = [
  {
    title: 'Pre-Intensive Reflection',
    desc: 'Before our session, you\'ll complete a short reflection exercise designed to clarify the key questions and challenges you want to explore.',
  },
  {
    title: 'Full-Day Intensive Conversation',
    desc: 'A focused day of thoughtful dialogue designed to untangle complexity, examine key decisions, and surface what matters most.',
  },
  {
    title: 'Structured Exploration',
    desc: 'Throughout the day we explore your situation from multiple angles — personal, professional, strategic, and philosophical — helping you see clearly what may have been hidden.',
  },
  {
    title: 'Clarity Around Decisions',
    desc: 'By the end of the day, most clients leave with greater clarity around the choices and direction in front of them.',
  },
  {
    title: 'Follow-Up Conversation',
    desc: 'A follow-up call several weeks later to reflect on what emerged and support your next steps.',
  },
  {
    title: 'Optional Continued Work',
    desc: 'If deeper work feels valuable after the intensive, we can discuss ongoing coaching.',
  },
]

const forWho = [
  'Leaders carrying significant responsibility and seeking space to think clearly.',
  'Founders or executives navigating a major decision or transition.',
  'Individuals wrestling with deeper questions about direction, meaning, or vocation.',
  'People who value thoughtful conversation more than quick answers.',
]

const steps = [
  {
    num: '01',
    title: 'Initial Conversation',
    desc: 'We begin with a short call to determine whether a Private Intensive would be helpful for your situation.',
  },
  {
    num: '02',
    title: 'Preparation',
    desc: 'Before our session, you\'ll complete a brief reflection exercise to help clarify the questions and priorities you want to explore.',
  },
  {
    num: '03',
    title: 'The Intensive Day',
    desc: 'We spend a full day in focused conversation designed to create clarity around the decisions and tensions shaping your life and work.',
  },
  {
    num: '04',
    title: 'Integration',
    desc: 'A follow-up conversation allows us to reflect on what emerged and support your next steps.',
  },
]

export default function StrategicAdvisoryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[#06080f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
                Private Intensive
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#f5f0e8]">
                A full day dedicated to the questions that matter most.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#7a8099] leading-relaxed text-sm">
                When you&apos;re carrying real responsibility, it can be difficult to find space to think clearly.
              </p>
              <p className="text-[#7a8099] leading-relaxed text-sm mt-4">
                A Private Intensive creates that space. One focused day to step back, examine what matters most, and move forward with clarity.
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
              {/* Image placeholder */}
              <div className="aspect-[4/5] w-full relative">
                <Image src="/images/private-intensive.webp" alt="Private Intensive" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                Overview
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] mb-7 leading-tight">
                Clear thinking for complex decisions.
              </h2>
              <div className="space-y-4 text-[#7a8099] leading-relaxed text-sm">
                <p>
                  Most leaders don&apos;t lack intelligence or effort. They lack space to think.
                </p>
                <p>
                  The Private Intensive is designed to create that space.
                </p>
                <p>
                  Together, we spend a full day in focused conversation exploring the decisions, tensions, and questions shaping your work and life. We slow down, examine what matters most, and work toward clarity about the path ahead.
                </p>
                <p>
                  Many clients arrive carrying a mix of competing priorities, difficult choices, and quiet uncertainty. By the end of the day, the goal is simple: greater clarity, renewed perspective, and a confident sense of direction.
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
              Everything needed for a meaningful breakthrough.
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
                For thoughtful leaders navigating meaningful decisions.
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
              A simple and thoughtful process.
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
            Start Here
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#f5f0e8] mb-7 leading-tight">
            Interested in a Private Intensive?
          </h2>
          <p className="text-[#7a8099] text-sm leading-relaxed mb-10 max-w-md mx-auto">
            If you&apos;re navigating a challenging season and want space to think clearly with a trusted partner, I&apos;d be glad to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@yourname.com"
              className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
            >
              Schedule an Intro Conversation →
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 border border-[#1e2538] text-[#f5f0e8] text-sm font-medium hover:border-[#8B7A6A] hover:text-[#8B7A6A] transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
