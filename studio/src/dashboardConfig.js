export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'The City Painters',
            apiId: '8187e348-aa87-46f3-bb9b-0900868c0bce',
            buildHookId: '636d3d532450d70f15c404df',
            name: 'the-city-painters',
          },
        ],
      },
    },
    {
      name: 'gatsby',
      options: {
        title: 'Gatsby Preview Site',
        sites: [{ siteUrl: 'preview-citypaintersv1.gtsb.io' }],
      },
    },
  ],
};
