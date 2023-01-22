export default {
  name: "blockEditorial",
  title: "Editorial Content",
  type: "object",
  fields: [
    {
      type: "array",
      name: "content",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
