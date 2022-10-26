export default {
  name: "about",
  type: "document",
  title: "About Us",
  fields: [
    {
      title: "Image",
      name: "icon",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Heading Text",
      name: "heading",
      type: "string",
      description: "Heading for About...",
    },
    {
      title: "Fisrt Paragraph",
      name: "para1",
      type: "string",
      description: "Fisrt paragraph describing us...",
    },
    {
      title: "Second Paragraph",
      name: "para2",
      type: "string",
      description: "Second paragraph describing us...",
    },
    {
      title: "Button Text",
      name: "btntext",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "heading",
      },
    },
  ],
};
