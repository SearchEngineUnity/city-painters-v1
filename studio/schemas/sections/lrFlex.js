import { SiAdobelightroom } from 'react-icons/si';
import * as blocks from '../blocks';

export default {
  name: 'lrFlex',
  title: 'LR - Flex',
  type: 'object',
  icon: SiAdobelightroom,
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
      name: 'idTag',
      title: 'ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen.',
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please select exactly two blocks. The first item will appear left in layout.',
      of: [
        ...Object.values(blocks)
          .filter((block) => block.name !== 'heroBlock')
          .map(({ name, title }) => ({
            type: name,
            title,
          })),
      ],
      validation: (Rule) => Rule.length(2).error('Must contain two items'),
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      fieldset: 'presentation',
      options: {
        list: [
          { title: '3:1', value: '9:3' },
          { title: '2:1', value: '8:4' },
          { title: '7:5', value: '7:5' },
          { title: '1:1', value: '6:6' },
          { title: '5:7', value: '5:7' },
          { title: '1:2', value: '4:8' },
          { title: '1:3', value: '3:9' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: '6:6',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'reverseOrder',
      type: 'boolean',
      title: 'Reverse order on stacking?',
      fieldset: 'presentation',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'blockAlignment',
      title: 'Block Alignment',
      type: 'string',
      description: 'This determines how the L and R blocks align to each other.',
      options: {
        list: [
          { title: 'Top', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'center',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
    {
      name: 'designSettings',
      title: 'Design Settings',
      type: 'reference',
      to: [{ type: 'sectionDesignSet' }],
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
