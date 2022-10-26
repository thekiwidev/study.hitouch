export default {
  title: "How It Works",
  name: "steps",
  type: "document",
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
      title: "Step",
      name: "step",
      type: "string",
      description: "What step is this...",
    },
    {
      title: "Heading",
      type: "string",
      name: "heading",
      description: "The heading for this step...",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Description for this step...",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "step",
      },
    },
  ],
};
