import { defineType } from "sanity";
import { languages } from "../languages";

export default defineType({
	title: "Localized Slug",
	name: "localeSlug",
	type: "object",
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: "slug",
		// options: {
		//   source: "title",
		//   maxLength: 200,
		//   slugify: (input) =>
		//     input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
		// },
	})),
});
