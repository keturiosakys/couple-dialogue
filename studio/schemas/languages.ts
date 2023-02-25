export const languages = [
	{ id: "lt", title: "Lietuvių", isDefault: true },
	{ id: "en", title: "English" },
];

export const baseLanguage = languages.find((l) => l.isDefault) ?? languages[0];
