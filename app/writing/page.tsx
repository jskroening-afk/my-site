import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit — essays, frameworks, and ideas.',
}

const posts = [
  {
    slug: 'lorem-ipsum-dolor-sit-amet',
    category: 'Strategy',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: 'March 1, 2026',
    readTime: '5 min read',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    slug: 'consectetur-adipiscing-elit',
    category: 'Leadership',
    title: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    date: 'February 14, 2026',
    readTime: '7 min read',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  },
  {
    slug: 'sed-do-eiusmod-tempor',
    category: 'Thinking',
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna',
    date: 'January 28, 2026',
    readTime: '4 min read',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.',
  },
  {
    slug: 'ut-labore-et-dolore-magna',
    category: 'Strategy',
    title: 'Ut labore et dolore magna aliqua enim ad minim veniam',
    date: 'January 10, 2026',
    readTime: '6 min read',
    excerpt:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    slug: 'quis-nostrud-exercitation',
    category: 'Coaching',
    title: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip',
    date: 'December 19, 2025',
    readTime: '8 min read',
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.',
  },
  {
    slug: 'excepteur-sint-occaecat',
    category: 'Leadership',
    title: 'Excepteur sint occaecat cupidatat non proident sunt culpa',
    date: 'December 5, 2025',
    readTime: '5 min read',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipiscing.',
  },
]

const categories = ['All', 'Strategy', 'Leadership', 'Coaching', 'Thinking']

export default function WritingPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-20 border-b border-[#E0D8CF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-6">
                Writing
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.1] text-[#111008]">
                Ideas worth keeping.
              </h1>
            </div>
            <p className="text-sm text-[#7A7470] leading-relaxed max-w-xs md:text-right">
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
                    ? 'bg-[#111008] text-[#F8F6F2] border-[#111008]'
                    : 'bg-transparent text-[#7A7470] border-[#E0D8CF] hover:border-[#8B7A6A] hover:text-[#8B7A6A]'
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
                {/* Image placeholder */}
                <Link href={`/writing/${post.slug}`} className="block mb-5">
                  <div className="aspect-[3/2] bg-[#E0D8CF] group-hover:bg-[#D4C5B6] transition-colors" />
                </Link>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium">
                    {post.category}
                  </span>
                  <span className="text-[#E0D8CF]">·</span>
                  <span className="text-[10px] text-[#7A7470]">{post.readTime}</span>
                </div>

                {/* Title */}
                <Link href={`/writing/${post.slug}`}>
                  <h2 className="font-serif text-xl font-normal text-[#111008] leading-snug mb-3 group-hover:text-[#8B7A6A] transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-[#7A7470] leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Date + Read link */}
                <div className="flex items-center justify-between border-t border-[#E0D8CF] pt-4">
                  <span className="text-xs text-[#7A7470]">{post.date}</span>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-xs font-medium text-[#111008] hover:text-[#8B7A6A] transition-colors"
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
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-[#F0EBE4] border-t border-[#E0D8CF]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#8B7A6A] font-medium mb-5">
            Never Miss a Post
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#111008] mb-5 leading-tight">
            Get new writing delivered to your inbox.
          </h2>
          <p className="text-sm text-[#7A7470] leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join 0,000+ readers.
          </p>
          <Link href="/" className="inline-block px-8 py-4 bg-[#111008] text-[#F8F6F2] text-sm font-medium hover:bg-[#8B7A6A] transition-colors">
            Subscribe →
          </Link>
        </div>
      </section>
    </>
  )
}
