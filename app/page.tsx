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
            Consultant · Coach · Speaker
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.1] text-[#111008] max-w-4xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="text-base md:text-lg text-[#7A7470] max-w-lg leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </p>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
              Free weekly insights — join 0,000+ readers
            </p>
            <EmailSignup />
          </div>
        </div>
        {/* Scroll hint */}
        <div className="max-w-6xl mx-auto w-full pb-10 hidden md:block">
          <div className="w-px h-12 bg-[#E0D8CF] mx-0" />
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 border-t border-[#E0D8CF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[#E0D8CF] w-full max-w-sm" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F0EBE4] border border-[#E0D8CF] hidden lg:block" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                About
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-[#111008] mb-7 leading-tight">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-[#7A7470] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <p className="text-[#7A7470] leading-relaxed mb-10">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#111008] border-b border-[#111008] pb-0.5 hover:text-[#8B7A6A] hover:border-[#8B7A6A] transition-colors"
              >
                Read my story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 bg-[#111008]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
            Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#F8F6F2] max-w-lg leading-tight">
              Ways we can work together
            </h2>
            <p className="text-[#7A7470] max-w-xs leading-relaxed text-sm md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A2520]">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-[#111008] p-8 lg:p-10 hover:bg-[#1C1814] transition-colors flex flex-col"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                  {service.num}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[#F8F6F2] mt-5 mb-5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[#7A7470] leading-relaxed flex-1 mb-8">
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
                <div className="font-serif text-4xl text-[#E0D8CF] leading-none mb-5">&ldquo;</div>
                <p className="text-[#111008] leading-relaxed flex-1 mb-8 text-[0.95rem]">
                  {t.quote}
                </p>
                <div className="border-t border-[#E0D8CF] pt-5">
                  <p className="text-sm font-medium text-[#111008]">{t.name}</p>
                  <p className="text-xs text-[#7A7470] mt-1">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32 bg-[#F0EBE4]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#111008] mb-7 leading-tight">
            Lorem ipsum dolor sit amet consectetur adipiscing.
          </h2>
          <p className="text-[#7A7470] leading-relaxed mb-10 text-[0.95rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href="/services/strategic-advisory"
            className="inline-block px-8 py-4 bg-[#111008] text-[#F8F6F2] text-sm font-medium hover:bg-[#8B7A6A] transition-colors"
          >
            Start Here →
          </Link>
        </div>
      </section>
    </>
  )
}
