// this is currently not in use but is kept should we ever work on this feature

export default {
  name: 'layoutSpg',
  title: 'SPG layout',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish'],
  fields: [
    {
      name: 'heroLrAlignment',
      title: 'Hero LR Block Alignment',
      type: 'string',
      description:
        'This determines how the L and R blocks align vertically to each other. Center is recommended.',
      options: {
        list: [
          { title: 'Top', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'heroImgAlignment',
      title: 'Hero Image Alignment within block',
      type: 'string',
      description:
        'This determines how the image aligns horizontally within the right block. Center is recommended',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `SPG Hero Layout`,
      };
    },
  },
};
