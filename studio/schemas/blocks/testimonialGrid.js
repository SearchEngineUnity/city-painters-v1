import { CgQuoteO } from 'react-icons/cg';

export default {
  name: 'testimonialGrid',
  title: 'Testimonial Grid',
  type: 'object',
  icon: CgQuoteO,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'testimonialList',
      type: 'array',
      title: 'Testimonial List',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'tileOption',
      title: 'Testimonial Design Option',
      type: 'string',
      fieldset: 'presentation',
      options: {
        list: [
          { title: 'Testimonial with Image', value: '1' },
          { title: 'Plain Testimonial', value: '2' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description:
        'Please enter in the format of value/value/value/value for desktop/tablet/tablet-mobile/mobile. Accepted values are 1, 2, 3, 4, 6, 12.',
      type: 'string',
      initialValue: '3/2/2/1',
      fieldset: 'presentation',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.regex(/^(1|2|3|4|6|12)(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))$/).error(
          'Accepted pattern is value/value/vale/value. Accepted values are 1, 2, 3, 4, 6, 12.',
        ),
      ],
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header above the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the footer below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      heading: 'header.heading',
      subheading: 'header.subheading',
      tileOption: 'tileOption',
    },
    prepare({ heading, subheading, tileOption }) {
      switch (tileOption) {
        case '1':
          return {
            title: heading || subheading || 'Testimonial Grid',
            subtitle: 'display: Testimonial with Image',
          };
        case '2':
          return {
            title: heading || subheading || 'Testimonial Grid',
            subtitle: 'display: Plain Testimonial',
          };
        default:
          return { title: 'Error' };
      }
    },
  },
};
