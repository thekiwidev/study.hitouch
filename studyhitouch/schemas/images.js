export default {
  title: "Images",
  name: "images",
  type: "document",

  fields: [
    {
      title: "Image",
      type: "image",
      name: "image",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "what page/page section has this image...",
    },
    {
      title: "Alternative Text",
      name: "alttext",
      type: "string",
      description: "the alternative text for this image...",
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
