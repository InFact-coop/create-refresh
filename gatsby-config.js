module.exports = {
  siteMetadata: {
    title: 'EU Compliant Meme Generator',
    description: 'Turn your dreams into memes',
    author: '@infact-coop',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
