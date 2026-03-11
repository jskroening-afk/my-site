// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => (values?.title ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Strategy", "Leadership", "Coaching", "Thinking"],
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time"
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
