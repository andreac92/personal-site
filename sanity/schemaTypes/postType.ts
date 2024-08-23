import { ComposeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug" }),
    defineField({ name: "date", type: "datetime" }),
    defineField({ name: "modified", type: "datetime" }),
    defineField({
      name: "content",
      type: "portableText",
    }),
    defineField({
      name: "excerpt",
      type: "portableText",
    }),
    defineField({ name: "featuredMedia", type: "image" }),
    defineField({ name: "featuredMediaAlt", type: "string" }),
    defineField({ name: "sticky", type: "boolean" }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "featuredMedia",
    },
  },
});
