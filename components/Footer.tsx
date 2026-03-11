import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E0D8CF] bg-[#F8F6F2]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="font-serif text-[1.1rem] font-semibold text-[#111008]">
              Your Name
            </Link>
            <p className="mt-4 text-sm text-[#7A7470] leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <p className="mt-5 text-sm text-[#111008]">
              <a
                href="mailto:hello@yourname.com"
                className="hover:text-[#8B7A6A] transition-colors"
              >
                hello@yourname.com
              </a>
            </p>
          </div>

          {/* Work with Me */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              Work with Me
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/strategic-advisory"
                  className="text-sm text-[#7A7470] hover:text-[#111008] transition-colors"
                >
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-coaching"
                  className="text-sm text-[#7A7470] hover:text-[#111008] transition-colors"
                >
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/services/workshops-training"
                  className="text-sm text-[#7A7470] hover:text-[#111008] transition-colors"
                >
                  Workshops & Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#7A7470] hover:text-[#111008] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-sm text-[#7A7470] hover:text-[#111008] transition-colors"
                >
                  Writing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E0D8CF] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#7A7470]">
            © {year} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-[#7A7470]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
