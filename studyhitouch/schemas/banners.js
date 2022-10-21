export default {
  name: "banner",
  type: "document",
  title: "Banners",
  fields: [
    {
      title: "Page",
      name: "page",
      type: "string",
      description: "what page has this banner...",
    },
    {
      title: "Heading Text",
      name: "headingtext",
      type: "string",
      description: "the main heading text for this banner...",
    },
    {
      title: "Primary Button Text",
      name: "primarybtn",
      type: "string",
      description: "the text for this button...",
    },
    {
      title: "Primary Button URL",
      name: "primarybtnurl",
      type: "string",
      description: "the link for this button...",
    },
    {
      title: "Secondary Button Text",
      name: "secondarybtn",
      type: "string",
      description: "the text for this button...",
    },
    {
      title: "Secondary Button URL",
      name: "secondarybtnurl",
      type: "string",
      description: "the link for this button...",
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "page",
      },
    },
  ],
};
