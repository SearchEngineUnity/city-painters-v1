export default {
  title: 'Twitter Open Graph Meta Pack',
  name: 'twitterShareMetaPack',
  type: 'object',
  fields: [
    {
      title: 'Twitter Share Title',
      name: 'twitterShareTitle',
      type: 'string',
    },
    {
      title: 'Twitter Share Description',
      name: 'twitterShareDescription',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Twitter Share Image',
      name: 'twitterShareImage',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'twitterShareTitle',
    },
  },
};
