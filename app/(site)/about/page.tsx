import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

const values = [
  {
    title: 'Clarity over complexity',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Long-term thinking',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Radical candor',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Results with integrity',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

const experience = [
  {
    year: '2019 – Present',
    role: 'Independent Consultant & Coach',
    org: 'Self-employed',
  },
  {
    year: '2015 – 2019',
    role: 'Senior Director of Strategy',
    org: 'Lorem Ipsum Corp',
  },
  {
    year: '2011 – 2015',
    role: 'Management Consultant',
    org: 'Dolor Sit Amet Partners',
  },
  {
    year: '2008 – 2011',
    role: 'Associate',
    org: 'Consectetur Advisors',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
            About
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#f5f0e8] max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h1>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-t border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-[#1a2035] w-full max-w-sm" />
            </div>
            {/* Text */}
            <div className="lg:col-span-7 lg:pt-4">
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] mb-7 leading-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h2>
              <div className="space-y-4 text-[#7a8099] leading-relaxed text-[0.95rem]">
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
                  doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#0f1525]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
                How I Work
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight">
                Principles that guide everything.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex items-end">
              <p className="text-sm text-[#7a8099] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e2538]">
            {values.map((v, i) => (
              <div key={i} className="bg-[#0f1525] p-8 lg:p-10">
                <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-[#f5f0e8] mt-4 mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#7a8099] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 border-t border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
                Background
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] leading-tight">
                Experience & credentials.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-0">
                {experience.map((item, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 gap-6 py-6 ${
                      i < experience.length - 1 ? 'border-b border-[#1e2538]' : ''
                    }`}
                  >
                    <span className="text-xs text-[#8B7A6A] font-medium pt-0.5">{item.year}</span>
                    <div className="col-span-2">
                      <p className="text-sm font-medium text-[#f5f0e8]">{item.role}</p>
                      <p className="text-xs text-[#7a8099] mt-1">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mt-12 pt-8 border-t border-[#1e2538]">
                <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                  Education
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-[#f5f0e8]">MBA, Lorem Ipsum School of Business</p>
                    <p className="text-xs text-[#7a8099] mt-0.5">Dolor Sit University · 2008</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#f5f0e8]">BA in Economics & Philosophy</p>
                    <p className="text-xs text-[#7a8099] mt-0.5">Consectetur College · 2005</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#06080f]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-7">
            Work Together
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#f5f0e8] mb-7 leading-tight">
            Ready to do your best work?
          </h2>
          <p className="text-[#7a8099] leading-relaxed mb-10 text-sm max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/strategic-advisory"
              className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors"
            >
              View Services →
            </Link>
            <Link
              href="/writing"
              className="inline-block px-8 py-4 border border-[#1e2538] text-[#f5f0e8] text-sm font-medium hover:border-[#8B7A6A] hover:text-[#8B7A6A] transition-colors"
            >
              Read My Writing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
