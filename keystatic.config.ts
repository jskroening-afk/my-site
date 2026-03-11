import { config, fields, collection } from '@keystatic/core'

export default config({
  storage:
    process.env.KEYSTATIC_GITHUB_CLIENT_ID
      ? {
          kind: 'github',
          repo: 'jskroening-afk/my-site',
        }
      : { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/uploads',
          publicPath: '/uploads',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Strategy', value: 'Strategy' },
            { label: 'Leadership', value: 'Leadership' },
            { label: 'Coaching', value: 'Coaching' },
            { label: 'Thinking', value: 'Thinking' },
          ],
          defaultValue: 'Strategy',
        }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        readTime: fields.text({ label: 'Read Time' }),
        body: fields.document({
          label: 'Body',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/uploads',
            publicPath: '/uploads',
          },
        }),
      },
    }),
  },
})
