module.exports = {
  siteMetadata: {
    siteTitle: `Combo Graph`,
    defaultTitle: `Combo Graph`,
    siteTitleShort: `Combo Graph`,
    siteDescription: `Combo Graph is an Unreal plugin based on GAS (Gameplay Ability System) that lets you focus on Combo / Combat design with a Custom Graph and Editor to deliver a fast, flexible and enjoyable developer experience. The main idea behind this plugin is to try to cut down iteration times as much as possible when designing and prototyping a new combat system / combos.`,
    siteUrl: `https://combo-graph.github.io`,
    siteAuthor: `@mklabs`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        branch: `master`,
        repositoryUrl: `https://github.com/combo-graph/documentation`,
        baseDir: ``,
        withMdx: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              withWebp: true,
              wrapperStyle: 'margin-left: initial',
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: 650,
              height: 'auto',
              preload: 'auto',
              muted: false,
              autoplay: false,
              playsinline: true,
              controls: true,
              loop: true
            }
          }
        ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Combo Graph`,
        short_name: `Combo Graph`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://combo-graph.github.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
