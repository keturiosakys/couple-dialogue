import { defineType } from "sanity";
import { languages } from "../languages";

function createCta() {
	let fieldsobj = [
		{
			type: "string",
			name: "url",
			title: "URL nuoroda",
			description: "Kur nukreipti vartotoją (pilnas su https://)",
		},
	];

	languages.map((lang) => {
		fieldsobj.push({
			type: "string",
			name: lang.id,
			title: lang.title,
			description: "Nuorodos tekstas",
		});
	});
	return fieldsobj;
}

export default defineType({
	title: "Localized CTA",
	name: "localeCta",
	type: "object",
	fields: createCta(),
});
