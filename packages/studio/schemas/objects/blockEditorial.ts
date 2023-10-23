import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
	name: "blockEditorial",
	title: "Editorial Content",
	type: "object",
	fields: [
		defineField({
			type: "array",
			name: "content",
			of: [
				defineArrayMember({
					type: "block",
				}),
			],
		}),
	],
});
