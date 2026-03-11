import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getAllSlugs, getPostBySlug, formatDate } from '@/lib/posts'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return { title: post.title, description: post.excerpt }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  // Adjacent posts for prev/next navigation
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = allPosts[currentIndex + 1] ?? null
  const nextPost = allPosts[currentIndex - 1] ?? null

  return (
    <>
      {/* ── Article Header ── */}
      <section className="px-6 lg:px-8 pt-40 pb-12 lg:pt-48 lg:pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-xs text-[#7a8099]">
            <Link href="/writing" className="hover:text-[#8B7A6A] transition-colors">
              Writing
            </Link>
            <span>/</span>
            <span className="text-[#f5f0e8]">{post.category}</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
              {post.category}
            </span>
            <span className="text-[#3a4a6b]">·</span>
            <span className="text-[10px] text-[#7a8099]">{post.readTime}</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.15] text-[#f5f0e8] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 pb-10 border-b border-[#1e2538]">
            <div className="w-10 h-10 rounded-full bg-[#1a2035]" />
            <div>
              <p className="text-sm font-medium text-[#f5f0e8]">Your Name</p>
              <p className="text-xs text-[#7a8099] mt-0.5">{formatDate(post.date)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 lg:px-8 py-0">
        <div className="max-w-3xl mx-auto">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <div className="aspect-[16/9] bg-[#1a2035] w-full" />
          )}
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Lead paragraph */}
          <p className="text-lg text-[#7a8099] leading-relaxed font-normal mb-8">
            {post.excerpt}
          </p>

          {/* MDX body */}
          <div className="prose-tina">
            <MDXRemote source={post.body} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#1e2538] flex flex-wrap gap-2">
            <span className="text-[10px] text-[#7a8099] uppercase tracking-widest font-medium mr-2 pt-1.5">
              Tagged:
            </span>
            {[post.category, 'Lorem Ipsum', 'Dolor Sit'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-[#1e2538] text-xs text-[#7a8099] hover:border-[#8B7A6A] hover:text-[#8B7A6A] transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* ── Author Box ── */}
      <section className="px-6 lg:px-8 py-12 border-t border-[#1e2538] bg-[#0f1525]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-[#1a2035] flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-2">
                Written by
              </p>
              <p className="font-serif text-xl font-normal text-[#f5f0e8] mb-3">Your Name</p>
              <p className="text-sm text-[#7a8099] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <Link
                href="/about"
                className="text-sm font-medium text-[#f5f0e8] border-b border-[#f5f0e8] pb-0.5 hover:text-[#8B7A6A] hover:border-[#8B7A6A] transition-colors"
              >
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Post Navigation ── */}
      <section className="px-6 lg:px-8 py-0 border-t border-[#1e2538]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {prevPost ? (
            <Link
              href={`/writing/${prevPost.slug}`}
              className="flex flex-col p-8 lg:p-12 hover:bg-[#0f1525] transition-colors border-b md:border-b-0 md:border-r border-[#1e2538] group"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#7a8099] font-medium mb-3">
                ← Previous
              </span>
              <span className="font-serif text-lg font-normal text-[#f5f0e8] leading-snug group-hover:text-[#8B7A6A] transition-colors">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/writing/${nextPost.slug}`}
              className="flex flex-col p-8 lg:p-12 hover:bg-[#0f1525] transition-colors md:text-right group"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#7a8099] font-medium mb-3">
                Next →
              </span>
              <span className="font-serif text-lg font-normal text-[#f5f0e8] leading-snug group-hover:text-[#8B7A6A] transition-colors">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  )
}
