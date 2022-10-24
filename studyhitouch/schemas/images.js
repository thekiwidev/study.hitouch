export default {
  title: "Images",
  name: "images",
  type: "document",

  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
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
