const navConfig = {
  'SafePay Home': {
    category: 'Home',
    url: 'https://www.safepay.com',
    description:
      'Homepage',
    omitLandingPage: true
  },
};

const footerNavConfig = {
  Blog: {
    href: 'https://medium.com/safepay',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Contribute: {
    href: 'https://github.com/getsafepay'
  },
};

module.exports = {
  siteName: 'SafePay',
  description: "",
  pageTitle: 'SafePay API Docs',
  menuTitle: 'SafePay',
  gaTrackingId: '',
  algoliaApiKey: '',
  algoliaIndexName: '',
  baseUrl: 'https://www.safepay.com',
  twitterHandle: 'safepayhq',
  spectrumHandle: '',
  youtubeUrl: '',
  logoLink: '',
  navConfig,
  footerNavConfig,
  ffWidgetId: ''
};
