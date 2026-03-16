import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cohorts',
  description:
    'Small groups engaging in thoughtful conversation and shared reflection around a specific season, challenge, or theme.',
}

const formats = [
  {
    title: 'Seasonal Cohort',
    duration: '8–10 weeks',
    desc: 'A small group journey designed around a specific season or theme, meeting regularly for thoughtful conversation and shared reflection.',
    capacity: 'Maximum 4 participants.',
  },
  {
    title: 'Focused Cohort',
    duration: '4–6 weeks',
    desc: 'Shorter cohorts designed to explore a particular challenge or leadership question in a focused and practical way.',
    capacity: 'Maximum 4 participants.',
  },
  {
    title: 'Ongoing Leadership Circle',
    duration: 'Quarterly',
    desc: 'For individuals who value continuing conversation and reflection alongside a consistent group of thoughtful peers.',
    capacity: 'Maximum 4 participants.',
  },
]

const topics = [
  'Navigating complex leadership decisions',
  'Balancing ambition, responsibility, and personal life',
  'Leading with integrity under pressure',
  'Finding clarity in seasons of transition',
  'Exploring deeper questions of meaning and vocation',
  'Developing greater self-awareness as a leader',
]

const steps = [
  {
    num: '01',
    title: 'Application',
    desc: 'Interested participants share a brief description of the season they are navigating and what they hope to explore.',
  },
  {
    num: '02',
    title: 'Group Formation',
    desc: 'Cohorts are intentionally small and thoughtfully composed to ensure meaningful conversation and shared learning.',
  },
  {
    num: '03',
    title: 'Guided Conversations',
    desc: 'Each session is structured around thoughtful dialogue, reflection, and exploration of real challenges participants are facing.',
  },
  {
    num: '04',
    title: 'Continued Growth',
    desc: 'Many participants choose to continue the conversation through future cohorts or ongoing coaching.',
  },
]

export default function WorkshopsTrainingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[#06080f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
                Cohorts
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#f5f0e8]">
                Small, thoughtful groups for leaders navigating complex seasons of work and life.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#7a8099] leading-relaxed text-sm">
                Cohorts bring together a small number of people for honest conversation, shared reflection, and deeper clarity about the questions they are facing.
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
              <div className="aspect-[4/5] w-full relative">
                <Image src="/images/cohorts.webp" alt="Cohorts" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                Overview
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] mb-7 leading-tight">
                You don&apos;t have to think through everything alone.
              </h2>
              <div className="space-y-4 text-[#7a8099] leading-relaxed text-sm">
                <p>
                  Leadership can be deeply rewarding, but it can also be isolating.
                </p>
                <p>
                  Many of the questions leaders face — about responsibility, direction, meaning, and difficult decisions — are rarely discussed openly.
                </p>
                <p>
                  Cohorts bring together a small group of thoughtful people navigating similar seasons of life and leadership. Through guided conversation and shared reflection, participants gain new perspective, deeper clarity, and the rare benefit of learning alongside others facing similar challenges.
                </p>
                <p>
                  Each cohort is intentionally small in order to preserve honesty, depth, and meaningful dialogue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formats ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#0f1525]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              Format
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight max-w-xl">
              Small groups, meaningful conversation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e2538]">
            {formats.map((fmt, i) => (
              <div key={i} className="bg-[#0f1525] p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-serif text-xl font-normal text-[#f5f0e8]">{fmt.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mt-1 ml-4 flex-shrink-0">
                    {fmt.duration}
                  </span>
                </div>
                <p className="text-sm text-[#7a8099] leading-relaxed mb-5">{fmt.desc}</p>
                <div className="pt-5 border-t border-[#1e2538]">
                  <span className="text-xs text-[#7a8099]">{fmt.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topics ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-b border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
                Common Themes
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight">
                The kinds of questions we explore together.
              </h2>
              <p className="text-sm text-[#7a8099] leading-relaxed mt-5">
                Each cohort explores themes related to leadership, responsibility, and meaningful work. While every group is unique, conversations often include topics such as:
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-0">
                {topics.map((topic, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-5 py-5 ${
                      i < topics.length - 1 ? 'border-b border-[#1e2538]' : ''
                    }`}
                  >
                    <span className="text-[#8B7A6A] mt-0.5 flex-shrink-0">→</span>
                    <span className="text-[#f5f0e8] text-sm leading-relaxed">{topic}</span>
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
              A thoughtful rhythm of conversation.
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
            Bring This to Your Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#f5f0e8] mb-7 leading-tight">
            Interested in joining a cohort?
          </h2>
          <div className="text-[#7a8099] text-sm leading-relaxed mb-10 max-w-md mx-auto space-y-4">
            <p>Cohorts are intentionally small in order to preserve honesty, depth, and meaningful conversation.</p>
            <p>If you&apos;re interested in participating in a future group, you can express interest below.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@yourname.com"
              className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
            >
              Join the Interest List →
            </Link>
            <Link
              href="/services/executive-coaching"
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
