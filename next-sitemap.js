/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://porner.pro',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://porner.pro/server-sitemap-index.xml', // <==== Add here
      ],
    },
  }
