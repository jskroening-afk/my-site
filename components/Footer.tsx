import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e2538] bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="font-serif text-[1.1rem] font-semibold text-[#f5f0e8]">
              Jeremy Stevens
            </Link>
            <p className="mt-4 text-sm text-[#7a8099] leading-relaxed max-w-xs">
              I work with founders, executives, and leaders navigating complex decisions and meaningful responsibility.
            </p>
            <p className="mt-5 text-sm text-[#f5f0e8]">
              <a
                href="mailto:hello@jeremystevens.co"
                className="hover:text-[#8B7A6A] transition-colors"
              >
                hello@jeremystevens.co
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
                  href="/services/private-intensive"
                  className="text-sm text-[#7a8099] hover:text-[#f5f0e8] transition-colors"
                >
                  Private Intensives
                </Link>
              </li>
              <li>
                <Link
                  href="/services/leadership-coaching"
                  className="text-sm text-[#7a8099] hover:text-[#f5f0e8] transition-colors"
                >
                  Leadership Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cohorts"
                  className="text-sm text-[#7a8099] hover:text-[#f5f0e8] transition-colors"
                >
                  Cohorts
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
                  className="text-sm text-[#7a8099] hover:text-[#f5f0e8] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-sm text-[#7a8099] hover:text-[#f5f0e8] transition-colors"
                >
                  Writing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2538] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#7a8099]">
            © 2026 Jeremy Stevens. All rights reserved.
          </p>
          <p className="text-xs text-[#7a8099]">
            forged in the fires of the outer darkness.
          </p>
        </div>
      </div>
    </footer>
  )
}
