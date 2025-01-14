module.exports = {
  integrations: {
    plentymarkets: {
      location: '@vue-storefront/plentymarkets-api/server',
      configuration: {
        api: {
          url: process.env.API_ENDPOINT || 'https://www.naturdrogerie.shop'
        }
      },
      extensions: extensions => [...extensions]
    }
  }
};
