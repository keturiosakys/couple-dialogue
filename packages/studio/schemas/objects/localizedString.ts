import { defineType } from "sanity";
import { languages } from "../languages";

export default defineType({
	title: "Localized String",
	name: "localeString",
	type: "object",
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: "string",
		// fieldset: lang.isDefault ? null : "translations",
	})),
});
