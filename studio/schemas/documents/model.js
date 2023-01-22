export default {
  name: "model",
  title: "Poros modelis",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Pavadinimas",
      type: "localeString",
    },
    {
      name: "description",
      title: "Trumpas aprašymas",
      type: "localeText",
      description: "Trumpas teksto anonsas kuris matysis pagrindiniame puslapyje",
    },
    {
      name: "model",
      title: "Aprašymas",
      type: "localeEditorial",
    },
  ],
};
