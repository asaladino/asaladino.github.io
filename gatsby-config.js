module.exports = {
  pathPrefix: '/docs',
  siteMetadata: {
    title: 'Coding Simply'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ]
}
