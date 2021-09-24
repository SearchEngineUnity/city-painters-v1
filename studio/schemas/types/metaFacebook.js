export default {
  title: 'Facebook Open Graph (Meta Tags)',
  name: 'metaFacebook',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optimal length is under 55 characters. Max recommended is 95 or under',
      validation: (Rule) => [Rule.max(55).warning('Length over optimal')],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optimal length is 55 characters. Max recommended is 200 or under',
      validation: (Rule) => [Rule.max(55).warning('Length over optimal')],
    },
    {
      title: 'Image',
      description: 'Facebook recommends 1200x630',
      name: 'image',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Facebook image required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
