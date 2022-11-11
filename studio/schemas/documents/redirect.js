import { BsArrowLeftRight } from 'react-icons/bs';

export default {
  name: 'redirect',
  type: 'document',
  title: 'Redirect',
  icon: BsArrowLeftRight,
  fields: [
    {
      name: 'redirectTo',
      title: 'Redirect To',
      type: 'url',
      description:
        'For internal redirect, please enter full path after the domain address starting with /. For external redirect, please enter the full url starting with https or http',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http'],
        }),
    },
    {
      name: 'redirectPaths',
      type: 'array',
      title: 'Redirected Urls',
      description:
        'Please enter the full path after the domain address starting with /. Upon landing on one of these URLs, the visitor will be redirected to the path selected above',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      slug: 'redirectTo',
    },
    prepare({ slug }) {
      return {
        title: slug,
        subtitle: 'redirect to',
      };
    },
  },
};
