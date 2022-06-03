import { AiOutlineOrderedList } from 'react-icons/ai';

export default {
  name: 'smartOrderedList',
  title: 'Smart Ordered List',
  type: 'object',
  icon: AiOutlineOrderedList,
  fields: [
    {
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'smartOrderedListItem' }],
      validation: (Rule) => Rule.min(1).error('Must contain at least one item'),
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      return {
        title: 'Smart Ordered list',
        subtitle: type,
      };
    },
  },
};
