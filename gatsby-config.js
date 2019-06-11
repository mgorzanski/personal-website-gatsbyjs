const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Mateusz Górzański`,
    description: `My name is Mateusz, I’m a high school student. I’m interested in computers since childhood, and I'm trying to learn new things everyday. Currently most of thetime I'm focused on web development. I love working with React and JavaScript. I’m also proficient in HTML5 and CSS3. I have basic skills in GIT as well as in other technologies. You can check a full list of skils in my resume.`,
    author: `@gorzanski`,
    siteUrl: `https://mateuszgorzanski.pl`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateusz Górzański - Personal website`,
        short_name: `Mateusz Górzański`,
        start_url: `/`,
        background_color: `#0752de`,
        theme_color: `#0752de`,
        display: `minimal-ui`,
        icon: 'src/images/icons/android-chrome-512x512.png'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap'
  ],
}
