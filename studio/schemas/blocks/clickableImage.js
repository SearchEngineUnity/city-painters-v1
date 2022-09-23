import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'clickableImage',
  title: 'Clickable Image',
  type: 'object',
  icon: BsCardImage,
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
      name: 'image',
      type: 'clickableImageImage',
      title: 'Image',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'affiliateLink' },
        { type: 'jumpLink' },
      ],
      validation: (Rule) => [
        Rule.length(1).error('Must contain only one item'),
        Rule.required().error('Field is required'),
      ],
    },
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'flex-start',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'string',
      fieldset: 'presentation',
      initialValue: '0px',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      media: 'image.asset',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Clickable Image',
      };
    },
  },
};
