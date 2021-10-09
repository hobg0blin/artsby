/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sass',
      {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `works`,
            path: `${__dirname}/src/works/`
          },
        }
    ],
  // for GitHub testing
  pathPrefix: '/gatsby-test',
  siteMetadata: {
    title: `Generative Unfoldings`
  }
}
