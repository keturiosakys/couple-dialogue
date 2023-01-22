export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "Puslapio atnaujinimai",
        sites: [
          {
            title: "Tinklapis",
            apiId: "a9df387e-1297-456c-841c-5a52460611a8",
            buildHookId: "6325a92cd800443980d5b0a0",
            name: "couple-dialogue",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited documents",
        order: "_updatedAt desc",
      },
      layout: {
        width: "auto",
        height: "large",
      },
    },
    {
      name: "project-users",
    },
    {
      name: "project-info",
    },
  ],
};
