'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const services = [
  {
    name: 'Strategic Advisory',
    href: '/services/strategic-advisory',
    description: 'High-level strategy for organizations ready to scale',
  },
  {
    name: 'Executive Coaching',
    href: '/services/executive-coaching',
    description: 'One-on-one coaching for senior leaders and founders',
  },
  {
    name: 'Workshops & Training',
    href: '/services/workshops-training',
    description: 'Immersive programs designed for teams and groups',
  },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F2]/95 backdrop-blur-sm border-b border-[#E0D8CF]">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[1.1rem] font-semibold tracking-tight text-[#111008] hover:text-[#8B7A6A] transition-colors"
          >
            Your Name
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">

            {/* Work with Me Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-[#8B7A6A]'
                    : 'text-[#111008] hover:text-[#8B7A6A]'
                }`}
              >
                Work with Me
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#F8F6F2] border border-[#E0D8CF] shadow-xl transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  {services.map((service, i) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`flex flex-col px-5 py-4 hover:bg-[#F0EBE4] transition-colors ${
                        i < services.length - 1 ? 'border-b border-[#E0D8CF]' : ''
                      }`}
                    >
                      <span className="text-sm font-medium text-[#111008]">{service.name}</span>
                      <span className="text-xs text-[#7A7470] mt-0.5 leading-relaxed">{service.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-[#8B7A6A]' : 'text-[#111008] hover:text-[#8B7A6A]'
              }`}
            >
              About
            </Link>

            <Link
              href="/writing"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith('/writing') ? 'text-[#8B7A6A]' : 'text-[#111008] hover:text-[#8B7A6A]'
              }`}
            >
              Writing
            </Link>

            <Link
              href="/services/strategic-advisory"
              className="text-sm font-medium text-[#F8F6F2] bg-[#111008] px-5 py-2.5 hover:bg-[#8B7A6A] transition-colors"
            >
              Start Here →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2 gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#111008] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#111008] transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#111008] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-[#E0D8CF] bg-[#F8F6F2] overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-3">Work with Me</p>
            <div className="space-y-1">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 text-sm font-medium text-[#111008] hover:text-[#8B7A6A] transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#E0D8CF] pt-6 space-y-1">
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-[#111008] hover:text-[#8B7A6A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/writing"
              className="block py-2 text-sm font-medium text-[#111008] hover:text-[#8B7A6A] transition-colors"
            >
              Writing
            </Link>
          </div>
          <div className="border-t border-[#E0D8CF] pt-6">
            <Link
              href="/services/strategic-advisory"
              className="block text-center text-sm font-medium text-[#F8F6F2] bg-[#111008] px-5 py-3.5 hover:bg-[#8B7A6A] transition-colors"
            >
              Start Here →
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
