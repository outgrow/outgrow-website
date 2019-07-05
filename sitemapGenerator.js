const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: 'https://outgrow.io',
  pagesDirectory: __dirname + "\/out",
  targetDirectory : 'out/'
});
