import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'submitBtn',
  title: 'Submit Button',
  type: 'object',
  icon: BsBootstrap,
  fields: [
    {
      name: 'idTag',
      title: 'Button ID',
      type: 'string',
      description: 'Add ID to the button. Please only use alphanumeric characters and hypen.',
    },
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'idTag',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
