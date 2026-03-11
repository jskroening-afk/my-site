import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit — essays, frameworks, and ideas.',
}

const categories = ['All', 'Strategy', 'Leadership', 'Coaching', 'Thinking']

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-20 border-b border-[#1e2538]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                Writing
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-[#f5f0e8]">
                Ideas worth keeping.
              </h1>
            </div>
            <p className="text-sm text-[#7a8099] leading-relaxed max-w-xs md:text-right">
              Essays, frameworks, and observations on strategy, leadership, and doing meaningful work.
            </p>
          </div>

          {/* Category filter (visual only) */}
          <div className="flex flex-wrap gap-2 mt-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-[#f5f0e8] text-[#0a0e1a] border-[#f5f0e8]'
                    : 'bg-transparent text-[#7a8099] border-[#1e2538] hover:border-[#8B7A6A] hover:text-[#8B7A6A]'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col">
                {/* Cover image or placeholder */}
                <Link href={`/writing/${post.slug}`} className="block mb-5">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="aspect-[3/2] w-full object-cover"
                    />
                  ) : (
                    <div className="aspect-[3/2] bg-[#1a2035] group-hover:bg-[#252d45] transition-colors" />
                  )}
                </Link>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                    {post.category}
                  </span>
                  <span className="text-[#3a4a6b]">·</span>
                  <span className="text-[10px] text-[#7a8099]">{post.readTime}</span>
                </div>

                {/* Title */}
                <Link href={`/writing/${post.slug}`}>
                  <h2 className="font-serif text-xl font-normal text-[#f5f0e8] leading-snug mb-3 group-hover:text-[#8B7A6A] transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-[#7a8099] leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Date + Read link */}
                <div className="flex items-center justify-between border-t border-[#1e2538] pt-4">
                  <span className="text-xs text-[#7a8099]">{formatDate(post.date)}</span>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-xs font-medium text-[#f5f0e8] hover:text-[#8B7A6A] transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#0f1525] border-t border-[#1e2538]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
            Never Miss a Post
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#f5f0e8] mb-5 leading-tight">
            Get new writing delivered to your inbox.
          </h2>
          <p className="text-sm text-[#7a8099] leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join 0,000+ readers.
          </p>
          <Link href="/" className="inline-block px-8 py-4 bg-[#f5f0e8] text-[#0a0e1a] text-sm font-medium hover:bg-[#8B7A6A] hover:text-[#f5f0e8] transition-colors">
            Subscribe →
          </Link>
        </div>
      </section>
    </>
  )
}
