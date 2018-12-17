module.exports = {
  siteMetadata: {
    title: "EU Compliant Meme Generator",
    description: "Turn your dreams into memes",
    author: "@infact-coop",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import")(), // allows you to use @import
          require("autoprefixer")(), // adds vendor prefixes like -webkit or -moz to your css for better support
          require("postcss-custom-media")(), // can set media queries as variables
          require("postcss-custom-properties")(), // allows you to use css variables e.g. var(--my-variable)
          require("postcss-clean")(), // minifies the output css (i.e. removes all the spaces and comments)
        ],
      },
    },
  ],
}
