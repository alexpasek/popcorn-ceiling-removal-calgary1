/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://popcornceilingremovalcalgary.com",
    generateRobotsTxt: true, // will also emit robots.txt
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 7000,
    robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
        // additionalSitemaps: ['https://popcornceilingremovalcalgary.com/sitemap-cities.xml'],
    },
};