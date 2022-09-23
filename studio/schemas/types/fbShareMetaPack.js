export default {
  title: 'Facebook Open Graph Meta Pack',
  name: 'fbShareMetaPack',
  type: 'object',
  fields: [
    {
      title: 'FaceBook Share Title',
      name: 'fbShareTitle',
      type: 'string',
    },
    {
      title: 'Facebook Share Description',
      name: 'fbShareDescription',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Facebook Share Image',
      name: 'fbShareImage',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'fbShareTitle',
    },
  },
};
