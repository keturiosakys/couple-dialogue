import { defineType, defineField } from "sanity";

export default defineType({
	title: "Image",
	name: "a11yImage",
	type: "object",
	fields: [
		defineField({
			title: "Image",
			name: "image",
			type: "image",
		}),
		defineField({
			title: "Alt Text",
			name: "altText",
			type: "string",
			description:
				"A short description of the image that helps with accessibility and SEO",
			validation: (Rule) => Rule.required(),
		}),
	],
});
