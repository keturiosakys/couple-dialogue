export default {
    type: "document",
    name: "landingPage",
    title: "Landing Page",
    preview: {
        select: {
            title: "content.0.hero.title.${baseLanguage.id}",
        },
    },
    fields: [
        {
            name: "content",
            type: "object",
            groups: [
                {
                    name: "hero",
                    title: "Hero",
                },
                {
                    name: "jau-laikas",
                    title: "Jau laikas",
                },
            ],
            options: {
                // layout: "object",
            },
            fields: [
                {
                    type: "object",
                    name: "hero",
                    group: "hero",
                    fields: [
                        {
                            type: "localeString",
                            title: "Title",
                            description:
                                "Pirmas dalykas ką pamato žmonės - pavadinimas didelėmis raidėmis",
                            name: "title",
                        },
                        {
                            type: "localeText",
                            title: "Description",
                            name: "description",
                            description: "Trumpas įvadinis sakinys",
                        },
                    ],
                },
                {
                    type: "object",
                    name: "jauLaikas",
                    group: "jau-laikas",
                    fields: [
                        {
                            type: "localeString",
                            title: "Title",
                            name: "title",
                            description: "Sekcijos pavadinimas",
                        },
                        {
                            type: "localeString",
                            title: "Subtitle",
                            name: "subtitle",
                            description: "Sekcijos prierašas",
                        },
                        {
                            name: "visual",
                            title: "Sekcijos vizualas",
                            type: "a11yImage",
                        },
                        // {
                        //   type: "array",
                        //   title: "Paslaugos",
                        //   name: "paslaugos",
                        //   of: [
                        //     {
                        //       type: "reference",
                        //       to: [{ type: "paslaugos" }],
                        //     },
                        //   ],
                        //   validation: (Rule) => Rule.max(3),
                        // },
                    ],
                },
            ],
        },
    ],
};
