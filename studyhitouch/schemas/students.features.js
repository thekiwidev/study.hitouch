export default {
  title: "Features",
  name: "feature",
  type: "document",
  description: "Something",

  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Heading",
      type: "string",
      name: "heading",
      description: "The heading for this point",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Description for this Point",
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
