export default {
	name: "consultantBioSection",
	title: "Biography Section",
	type: "object",
	fields: [
		{
			name: "title",
			title: "Section title",
			type: "string",
		},
		{
			name: "body",
			title: "Section body",
			type: "array",
			of: [
				{
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [{ title: "Bullet", value: "bullet" }],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
					},
				},
			],
		},
	],
};
