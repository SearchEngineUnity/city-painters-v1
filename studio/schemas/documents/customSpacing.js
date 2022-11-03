import React from 'react';

export default {
  name: 'customSpacing',
  type: 'document',
  title: 'Spacing',
  __experimental_actions: ['create', 'update', 'publish'],
  fields: [
    {
      name: 'sectionOuter',
      title: 'Sitewide Section Outer Padding Settings',
      type: 'paddingSet',
      initialValue: {
        desktopPadding: '32px 0px',
        tabletPadding: '24px 0px',
        tabletMobilePadding: '24px 0px',
        mobilePadding: '16px 0px',
      },
      description: (
        <>
          Recommend to set horizontal padding to be 0px. Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    },
    {
      name: 'sectionInner',
      title: 'Sitewide Section Inner Padding Settings',
      type: 'paddingSet',
      initialValue: {
        desktopPadding: '24px',
        tabletPadding: '16px',
        tabletMobilePadding: '16px',
        mobilePadding: '16px',
      },
      description: (
        <>
          Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Spacing`,
      };
    },
  },
};
