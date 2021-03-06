module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-mdx`,
    options: {
      gatsbyRemarkPlugins: [
      {
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 1035,
          sizeByPixelDensity: true
        }
      }
      ]
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/src/pages`
    }
  },
  ],
}
