module.exports = {
  pathPrefix: "/docs",
  siteMetadata: {
    title: 'Coding Simply',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ]
}
