/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://carlosmtz.dev/'
  },
  plugins: [
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-67858265-1",
      },
    },
  ],
}
