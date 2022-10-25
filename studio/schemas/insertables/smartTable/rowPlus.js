export default {
  name: 'rowPlus',
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [
        { type: 'tablePtCell' },
        { type: 'emptyCell' },
        { type: 'splitCell' },
        { type: 'illustration' },
        { type: 'clickableImage' },
        { type: 'btnBlockMui' },
        { type: 'videoEmbed' },
        { type: 'smartOrderedList' },
        { type: 'smartUnorderedList' },
      ],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `row`,
      };
    },
  },
};
