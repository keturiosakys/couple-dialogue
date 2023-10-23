import { defineField, defineType } from "sanity";

export default defineType({
	name: "config",
	title: "Config",
	type: "document",
	fields: [
		defineField({
			title: "SEO Metadata",
			name: "seo",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "description",
					title: "Description",
					type: "text",
				}),
				defineField({
					name: "image",
					title: "Image",
					type: "a11yImage",
				}),
				defineField({
					name: "keywords",
					title: "Keywords",
					type: "array",
					of: [{ type: "string" }],
					options: {
						layout: "tags",
					},
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "seo.title",
		},
	},
});
