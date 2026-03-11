import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  date: string
  category: string
  excerpt: string
  readTime: string
  coverImage?: string
}

export interface PostMeta extends PostFrontmatter {
  slug: string
}

export interface Post extends PostMeta {
  body: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const { data } = matter(raw)
      return { slug, ...(data as PostFrontmatter) }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post {
  const file = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return { slug, ...(data as PostFrontmatter), body: content }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
