export default {
  name: "customers",
  title: "Customer Listings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Customer Name",
      type: "string",
      description: "Company name, not individual",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: 'URL ending - ex home.com/customer'
    },
    {
      title: "Active Customer?",
      name: "activeCustomers",
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
