import { languages } from "../languages";

export default {
  title: "Localized Editorial Content",
  name: "localeEditorial",
  type: "object",
  // fieldsets: [                      Commenting out to simplify the view on Sanity (fewer toggles)
  //   {
  //     title: "Translations",
  //     name: "translations",
  //     options: { collapsible: true },
  //   },
  // ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "blockEditorial",
    // fieldset: lang.isDefault ? null : "translations",
  })),
};
