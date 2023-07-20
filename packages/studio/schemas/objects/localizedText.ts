import { defineType } from "sanity";
import { languages } from "../languages";

export default defineType({
	type: "object",
	title: "Localized Text",
	name: "localeText",
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: "text",
		// fieldset: lang.isDefault ? null : "translations",
	})),
});
