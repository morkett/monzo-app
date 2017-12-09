module.exports = {
  // RATES_API_KEY: process.env.RATES_API_KEY,
  USER_ID: process.env.MONZO_USER_ID,
  ACCOUNT_ID: process.env.MONZO_ACCOUNT_ID,
  FULL_ACCOUNT_ID: process.env.FULL_ACCOUNT_ID,
  ACCESS_TOKEN: process.env.MONZO_ACCESS_TOKEN,
  BASE_URL: 'https://api.monzo.com/',

  options: {
    url: `https://api.monzo.com`,
    headers: {
      Authorization: `Bearer ${process.env.MONZO_ACCESS_TOKEN}`
    }
  }
};
