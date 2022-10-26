export default {
  title: "Keypoints",
  name: "keypoint",
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
      title: "Point",
      name: "point",
      type: "string",
      description: "Which Point is this...",
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
        source: "point",
      },
    },
  ],
};
