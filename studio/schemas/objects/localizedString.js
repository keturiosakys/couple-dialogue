import { languages } from "../languages";

export default {
  title: "Localized String",
  name: "localeString",
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
    type: "string",
    // fieldset: lang.isDefault ? null : "translations",
  })),
};
