module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'SafePay',
        description: "",
        sidebarCategories: {
          null: ['index']
        }
      }
    }
  ]
};
