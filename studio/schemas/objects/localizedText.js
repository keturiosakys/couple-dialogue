import { languages } from "../languages";

export default {
  type: "object",
  title: "Localized Text",
  name: "localeText",
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
    type: "text",
    // fieldset: lang.isDefault ? null : "translations",
  })),
};
