const navConfig = {
  'SafePay Basics': {
    category: 'API',
    url: 'https://www.safepay.com',
    description:
      'SafePay API Docs.',
    omitLandingPage: true
  },
};

const themeOptions = require('./theme-options');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        baseDir: '.',
        contentDir: 'content',
        root: __dirname,
        siteName: 'SafePay',
        description: "",
        githubRepo: "getsafepay/safepay-benutzerdokumentation",
        sidebarCategories: {
          null: ['index']
        },
      }
    }
  ]
};
