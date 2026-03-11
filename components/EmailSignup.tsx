'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 max-w-md py-3">
        <div className="w-5 h-5 rounded-full bg-[#8B7A6A] flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm text-[#7A7470]">You&apos;re on the list. Check your inbox soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3.5 bg-white border border-[#E0D8CF] border-r-0 text-sm text-[#111008] placeholder:text-[#7A7470] focus:outline-none focus:border-[#8B7A6A] transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3.5 bg-[#111008] text-[#F8F6F2] text-sm font-medium hover:bg-[#8B7A6A] transition-colors whitespace-nowrap border border-[#111008]"
      >
        Subscribe →
      </button>
    </form>
  )
}
