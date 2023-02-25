import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	name: "consultantBioSection",
	title: "Biography Section",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Section title",
			type: "string",
		}),
		defineField({
			name: "body",
			title: "Section body",
			type: "array",
			of: [
				defineArrayMember({
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [{ title: "Bullet", value: "bullet" }],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
					},
				}),
			],
		}),
	],
});
