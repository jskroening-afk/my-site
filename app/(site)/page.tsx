import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Your Name — Consultant & Coach',
}

const services = [
  {
    num: '01',
    title: 'Strategic Advisory',
    href: '/services/strategic-advisory',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    num: '02',
    title: 'Executive Coaching',
    href: '/services/executive-coaching',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    num: '03',
    title: 'Workshops & Training',
    href: '/services/workshops-training',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    name: 'Lorem Ipsum',
    title: 'CEO, Company Name',
  },
  {
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    name: 'Dolor Sit',
    title: 'Founder, Company Name',
  },
  {
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
    name: 'Amet Consectetur',
    title: 'Director, Company Name',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto w-full py-28 lg:py-36">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-8">
            Coach · Writer · Artist
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.1] text-[#f5f0e8] max-w-4xl mb-8">
            You give a lot. Does anyone see what it costs?
          </h1>
          <p className="text-base md:text-lg text-[#7a8099] max-w-lg leading-relaxed mb-12">
            1:1 coaching for founders and leaders in seasons of tension, transition, and
            lonely decision-making — work that keeps the business real and the human intact.
          </p>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
              For people building thoughtful lives.
            </p>
            <p className="text-sm text-[#7a8099]">Essays on work, meaning, creativity, and faith.</p>
            <EmailSignup />
          </div>
        </div>
        {/* Scroll hint */}
        <div className="max-w-6xl mx-auto w-full pb-10 hidden md:block">
          <div className="w-px h-12 bg-[#1e2538] mx-0" />
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[#1a2035] w-full max-w-sm" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0f1525] border border-[#1e2538] hidden lg:block" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                About
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#f5f0e8] mb-7 leading-tight">
                I&apos;ve spent my whole life in the in-between.
              </h2>
              <p className="text-[#7a8099] leading-relaxed mb-4">
                Between people who disagree. Between what a role demands and what a person can
                carry. Between what&apos;s working on paper and what&apos;s quietly falling apart underneath.
              </p>
              <p className="text-[#7a8099] leading-relaxed mb-10">
                In every room I&apos;ve ever been in, I&apos;ve been the one people come to when they need
                to think something through, cool something down, or finally say the thing they
                haven&apos;t been able to say out loud.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#f5f0e8] border-b border-[#f5f0e8] pb-0.5 hover:text-[#8B7A6A] hover:border-[#8B7A6A] transition-colors"
              >
                Read my story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 bg-[#06080f]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
            Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#f5f0e8] max-w-lg leading-tight">
              Ways we can work together
            </h2>
            <p className="text-[#7a8099] max-w-xs leading-relaxed text-sm md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0d1120]">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-[#06080f] p-8 lg:p-10 hover:bg-[#0d1120] transition-colors flex flex-col"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                  {service.num}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[#f5f0e8] mt-5 mb-5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[#7a8099] leading-relaxed flex-1 mb-8">
                  {service.desc}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium group-hover:tracking-[0.2em] transition-all duration-300">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-16 text-center">
            Kind Words
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-serif text-4xl text-[#2a3558] leading-none mb-5">&ldquo;</div>
                <p className="text-[#f5f0e8] leading-relaxed flex-1 mb-8 text-[0.95rem]">
                  {t.quote}
                </p>
                <div className="border-t border-[#1e2538] pt-5">
                  <p className="text-sm font-medium text-[#f5f0e8]">{t.name}</p>
                  <p className="text-xs text-[#7a8099] mt-1">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 bg-[#0f1525]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#f5f0e8] mb-7 leading-tight">
            Lorem ipsum dolor sit amet consectetur adipiscing.
          </h2>
          <p className="text-[#7a8099] leading-relaxed mb-10 text-[0.95rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href="/services/strategic-advisory"
            className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
          >
            Start Here →
          </Link>
        </div>
      </section>
    </>
  )
}
