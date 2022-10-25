export default {
  title: 'PT Cell',
  name: 'tablePtCell',
  type: 'object',
  fields: [
    {
      name: 'copy',
      title: 'Cell Content',
      type: 'smartTablePT',
    },
  ],
  preview: {
    select: {
      content: 'copy',
      subtitle: '_type',
    },
    prepare({ content, subtitle }) {
      switch (content[0]._type) {
        case 'block':
          return {
            title: content[0].children[0].text,
            subtitle,
          };

        default:
          return {
            title: `This list item start with '${content[0]._type}''`,
            subtitle,
          };
      }
    },
  },
};
