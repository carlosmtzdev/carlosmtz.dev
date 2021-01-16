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
    `gatsby-plugin-cname`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-67858265-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        //.. other options
        pagesPaths: [ `${__dirname}/src/posts`],
        langKeyDefault: 'es',
        prefixDefault: false,
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: 'src/templates/blogTemplate.js',
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `
        }
      }
    }
  ],
}
