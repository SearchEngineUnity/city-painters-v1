import { FiNavigation2 } from 'react-icons/fi';

export default {
  name: 'navSet',
  title: 'Navigation Menu',
  type: 'object',
  icon: FiNavigation2,
  fields: [
    {
      name: 'menuGroup',
      title: 'Menu Group',
      type: 'array',
      description: 'Use Navigation Item for single link and Group for bundled links',
      of: [
        {
          type: 'navBrand',
        },
        {
          type: 'navItem',
        },
        {
          type: 'navGroup',
        },
        {
          type: 'navPhone',
        },
      ],
      validation: (Rule) => Rule.min(1).error('Must contain one item'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation Set',
      };
    },
  },
};
