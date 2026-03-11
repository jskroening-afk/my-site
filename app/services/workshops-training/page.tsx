import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Workshops & Training',
  description:
    'Lorem ipsum dolor sit amet — immersive programs designed to align teams and unlock collective capability.',
}

const formats = [
  {
    title: 'Half-day workshop',
    duration: '4 hours',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    capacity: 'Up to 20 participants',
  },
  {
    title: 'Full-day intensive',
    duration: '8 hours',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    capacity: 'Up to 30 participants',
  },
  {
    title: 'Multi-day retreat',
    duration: '2–3 days',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    capacity: 'Up to 40 participants',
  },
]

const topics = [
  'Strategic planning and goal alignment',
  'Leadership development and team dynamics',
  'Communication and decision-making frameworks',
  'Change management and organizational resilience',
  'Innovation and creative problem-solving',
  'Culture design and values operationalization',
]

const steps = [
  {
    num: '01',
    title: 'Scoping call',
    desc: 'We discuss your team, objectives, and the specific outcomes you want the workshop to deliver.',
  },
  {
    num: '02',
    title: 'Custom design',
    desc: 'I design a bespoke program tailored to your organization, industry, and specific challenges.',
  },
  {
    num: '03',
    title: 'Facilitation',
    desc: 'I facilitate the workshop with energy, depth, and adaptability to meet your team where they are.',
  },
  {
    num: '04',
    title: 'Follow-through',
    desc: 'Post-workshop, I provide a written summary of key decisions, insights, and recommended next steps.',
  },
]

export default function WorkshopsTrainingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[#111008]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
                Services · 03
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#F8F6F2]">
                Workshops & Training
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#7A7470] leading-relaxed text-sm">
                Immersive, high-impact programs designed to align leadership teams, develop
                organizational capability, and accelerate collective progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#E0D8CF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-[#E0D8CF] w-full" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                Overview
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#111008] mb-7 leading-tight">
                Great teams are built, not found.
              </h2>
              <div className="space-y-4 text-[#7A7470] leading-relaxed text-sm">
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

      {/* ── Formats ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#F0EBE4]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              Program Formats
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#111008] leading-tight max-w-xl">
              Choose the format that fits your team&apos;s needs.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0D8CF]">
            {formats.map((fmt, i) => (
              <div key={i} className="bg-[#F0EBE4] p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-serif text-xl font-normal text-[#111008]">{fmt.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mt-1 ml-4 flex-shrink-0">
                    {fmt.duration}
                  </span>
                </div>
                <p className="text-sm text-[#7A7470] leading-relaxed mb-5">{fmt.desc}</p>
                <div className="pt-5 border-t border-[#E0D8CF]">
                  <span className="text-xs text-[#7A7470]">{fmt.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topics ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#E0D8CF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
                Common Topics
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#111008] leading-tight">
                Customized to your organization.
              </h2>
              <p className="text-sm text-[#7A7470] leading-relaxed mt-5">
                Every engagement is tailored. These are common areas — but if your challenge
                is not on this list, let&apos;s talk.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-0">
                {topics.map((topic, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-5 py-5 ${
                      i < topics.length - 1 ? 'border-b border-[#E0D8CF]' : ''
                    }`}
                  >
                    <span className="text-[#8B7A6A] mt-0.5 flex-shrink-0">→</span>
                    <span className="text-[#111008] text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#E0D8CF]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              How It Works
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#111008] leading-tight max-w-xl">
              From first conversation to lasting impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0D8CF]">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#F8F6F2] p-7 lg:p-8">
                <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#111008] mt-5 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-[#7A7470] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#111008]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
            Bring This to Your Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#F8F6F2] mb-7 leading-tight">
            Ready to design something together?
          </h2>
          <p className="text-[#7A7470] text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out with your team
            size, goals, and timeline — we will take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@yourname.com"
              className="inline-block px-8 py-4 bg-[#F8F6F2] text-[#111008] text-sm font-medium hover:bg-[#E0D8CF] transition-colors"
            >
              Inquire About a Workshop →
            </Link>
            <Link
              href="/services/executive-coaching"
              className="inline-block px-8 py-4 border border-[#2A2520] text-[#F8F6F2] text-sm font-medium hover:border-[#8B7A6A] hover:text-[#8B7A6A] transition-colors"
            >
              View Other Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
