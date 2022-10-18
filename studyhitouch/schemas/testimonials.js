export default {
  name: "testimonials",
  type: "document",
  title: "Testimonials",
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
      name: "service",
      type: "string",
      title: "Service Rendered",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
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
