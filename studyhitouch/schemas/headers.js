export default {
  name: "header",
  type: "document",
  title: "Headers",
  fields: [
    {
      name: "section",
      type: "string",
      title: "Seaction",
      description: "Which section has this header",
    },
    {
      title: "Page",
      type: "string",
      name: "page",
      description: "Which page has this header",
    },
    {
      name: "mainheading",
      type: "string",
      title: "Main Heading",
      description: "The main heaeding for this header",
    },
    {
      name: "subheading",
      type: "string",
      title: "Sub-Heading",
      description: "The sub-heaeding for this header",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "section",
      },
    },
  ],
};
