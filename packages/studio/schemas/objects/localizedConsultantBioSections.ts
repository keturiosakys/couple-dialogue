import { defineType } from "sanity";
import { languages } from "../languages";

export default defineType({
	title: "Localized Bio Section for Consultants",
	name: "localizedConsultantBioSections",
	type: "object",
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: "array",
		of: [{ type: "consultantBioSection" }],
	})),
});
