import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Strategic Advisory',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit — high-level strategy for organizations ready to scale.',
}

const deliverables = [
  {
    title: 'Quarterly strategy sessions',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Market & competitive analysis',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
  },
  {
    title: 'Executive team alignment',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    title: 'Go-to-market roadmaps',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  },
  {
    title: 'Written strategy documents',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
  },
  {
    title: 'Ongoing Slack/email access',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
]

const forWho = [
  'Founders scaling from $1M to $10M ARR',
  'Leadership teams navigating major transitions',
  'Executives preparing for fundraising or exit',
  'Organizations entering new markets',
]

const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We discuss your situation, goals, and whether we are the right fit.',
  },
  {
    num: '02',
    title: 'Diagnostic assessment',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation. I conduct a thorough review of your business and competitive landscape.',
  },
  {
    num: '03',
    title: 'Strategy engagement',
    desc: 'Duis aute irure dolor in reprehenderit. We work together over a defined engagement period to develop and implement strategy.',
  },
  {
    num: '04',
    title: 'Ongoing refinement',
    desc: 'Excepteur sint occaecat cupidatat. I remain available as your strategic thinking partner as you execute and adapt.',
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
                Services · 01
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#f5f0e8]">
                Strategic Advisory
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#7a8099] leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
              <div className="aspect-[4/5] bg-[#1a2035] w-full" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.
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
              Everything you need to move forward with confidence.
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
                Built for leaders at inflection points.
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
              A clear process from first call to full engagement.
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
            Ready to get clear on your strategy?
          </h2>
          <p className="text-[#7a8099] text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore. Spots are limited — apply below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@yourname.com"
              className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
            >
              Apply to Work Together →
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
