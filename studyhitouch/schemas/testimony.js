export default {
  name: "testimony",
  type: "document",
  title: "Testimonies",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "testimony",
      type: "string",
      title: "Testimony",
    },
    {
      name: "occupation",
      type: "string",
      title: "Occupation",
    },
    {
      title: "Client's Image",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
