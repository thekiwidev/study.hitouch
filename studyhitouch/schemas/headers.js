export default {
  name: "header",
  type: "document",
  title: "Headers",
  fields: [
    {
      name: "section",
      type: "string",
      title: "Seaction",
    },
    {
      name: "mainheading",
      type: "string",
      title: "Main Heading",
    },
    {
      name: "subheading",
      type: "string",
      title: "Sub-Heading",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: `${"section"}-section`,
      },
    },
  ],
};
