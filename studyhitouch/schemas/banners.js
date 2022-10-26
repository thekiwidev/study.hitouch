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
      name: "slug",
      type: "slug",
      title: "Slug",
    },
  ],
};
