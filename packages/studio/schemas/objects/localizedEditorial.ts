import { defineType } from "sanity";
import { languages } from "../languages";

export default defineType({
	title: "Localized Editorial Content",
	name: "localeEditorial",
	type: "object",
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: "blockEditorial",
	})),
});
