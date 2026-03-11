import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts = [
  {
    slug: 'lorem-ipsum-dolor-sit-amet',
    category: 'Strategy',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: 'March 1, 2026',
    readTime: '5 min read',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    slug: 'consectetur-adipiscing-elit',
    category: 'Leadership',
    title: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    date: 'February 14, 2026',
    readTime: '7 min read',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    slug: 'sed-do-eiusmod-tempor',
    category: 'Thinking',
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna',
    date: 'January 28, 2026',
    readTime: '4 min read',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    slug: 'ut-labore-et-dolore-magna',
    category: 'Strategy',
    title: 'Ut labore et dolore magna aliqua enim ad minim veniam',
    date: 'January 10, 2026',
    readTime: '6 min read',
    excerpt:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    slug: 'quis-nostrud-exercitation',
    category: 'Coaching',
    title: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip',
    date: 'December 19, 2025',
    readTime: '8 min read',
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    slug: 'excepteur-sint-occaecat',
    category: 'Leadership',
    title: 'Excepteur sint occaecat cupidatat non proident sunt culpa',
    date: 'December 5, 2025',
    readTime: '5 min read',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const prevPost = posts[currentIndex + 1] ?? null
  const nextPost = posts[currentIndex - 1] ?? null

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
              <p className="text-xs text-[#7a8099] mt-0.5">{post.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 lg:px-8 py-0">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] bg-[#1a2035] w-full" />
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="space-y-6 text-[#f5f0e8] leading-[1.8] text-[1rem]">

            <p className="text-lg text-[#7a8099] leading-relaxed font-normal">
              {post.excerpt} Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium.
            </p>

            <h2 className="font-serif text-2xl lg:text-3xl font-normal text-[#f5f0e8] pt-4">
              Lorem ipsum dolor sit amet
            </h2>

            <p>
              Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam.
            </p>

            <blockquote className="border-l-2 border-[#8B7A6A] pl-6 py-1 my-8">
              <p className="font-serif text-xl lg:text-2xl font-normal text-[#f5f0e8] italic leading-relaxed">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
            </blockquote>

            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>

            <h2 className="font-serif text-2xl lg:text-3xl font-normal text-[#f5f0e8] pt-4">
              Consectetur adipiscing elit
            </h2>

            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
              minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
              dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint.
            </p>

            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <h2 className="font-serif text-2xl lg:text-3xl font-normal text-[#f5f0e8] pt-4">
              Sed do eiusmod tempor
            </h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
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
