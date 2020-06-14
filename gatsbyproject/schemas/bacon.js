export default {
  name: "bacon",
  title: "BACON ARE GUD!",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title For Bacon",
      type: "string",
      description: "How many bacon you want?",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Put All Bacons here?",
      name: "defaultBaconBacons",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[1]",
    },
  },
}
