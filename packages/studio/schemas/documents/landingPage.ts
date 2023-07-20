import { defineType, defineField } from "sanity";

export default defineType({
	type: "document",
	name: "landingPage",
	title: "Landing Page",
	preview: {
		select: {
			title: "content.0.hero.title.${baseLanguage.id}",
		},
	},
	fields: [
		defineField({
			name: "content",
			type: "object",
			groups: [
				{
					name: "hero",
					title: "Hero",
				},
				{
					name: "jau-laikas",
					title: "Jau laikas",
				},
			],
			options: {
				// layout: "object",
			},
			fields: [
				defineField({
					type: "object",
					name: "hero",
					group: "hero",
					fields: [
						defineField({
							type: "localeString",
							title: "Title",
							description:
								"Pirmas dalykas ką pamato žmonės - pavadinimas didelėmis raidėmis",
							name: "title",
						}),
						defineField({
							type: "localeText",
							title: "Description",
							name: "description",
							description: "Trumpas įvadinis sakinys",
						}),
					],
				}),
				defineField({
					type: "object",
					name: "jauLaikas",
					group: "jau-laikas",
					fields: [
						defineField({
							type: "localeString",
							title: "Title",
							name: "title",
							description: "Sekcijos pavadinimas",
						}),
						defineField({
							type: "localeString",
							title: "Subtitle",
							name: "subtitle",
							description: "Sekcijos prierašas",
						}),
						defineField({
							name: "visual",
							title: "Sekcijos vizualas",
							type: "a11yImage",
						}),
						// {
						//   type: "array",
						//   title: "Paslaugos",
						//   name: "paslaugos",
						//   of: [
						//     {
						//       type: "reference",
						//       to: [{ type: "paslaugos" }],
						//     },
						//   ],
						//   validation: (Rule) => Rule.max(3),
						// },
					],
				}),
			],
		}),
	],
});
