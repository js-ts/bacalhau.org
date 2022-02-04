module.exports = {
  siteMetadata: {
    title: "Bacalhau",
    description: "Fine service of compute over data.",
    siteUrl: "https://bacalhau.org",
    image: "/logo.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@bacalhauproject",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg-assets/,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Bacalhau`,
        short_name: `Bacalhau`,
        description: `Bacalhau`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#390048`,
        theme_color: `#AD6CD6`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
