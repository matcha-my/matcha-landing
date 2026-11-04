export default {
  name: 'Matcha Talk',
  contentUpdated: '2026-11-05',
  // Set the final public origin before a production SEO release.
  origin: process.env.SITE_URL || 'https://matcha.talk',
  publicLaunch: process.env.PUBLIC_LAUNCH !== 'false',
  encryptionConfirmed: process.env.ENCRYPTION_CONFIRMED === 'true',
};
