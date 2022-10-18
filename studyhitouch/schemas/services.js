export default {
  name: "service",
  type: "document",
  title: "Services",
  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "url",
      type: "string",
      title: "URL",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
  ],
};
