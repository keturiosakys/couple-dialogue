import { defineField, defineType } from "sanity";

export default defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "consultant" },
		}),
		defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockEditorial",
		}),
	],

	preview: {
		select: {
			title: "title",
			author: "consultant.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author: consultant } = selection;
			return Object.assign({}, selection, {
				subtitle: consultant && `by ${consultant}`,
			});
		},
	},
});
