// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// CLIs not yet published on npm — exclude from sitemap until live
// This list is updated automatically as each package is published
const UNPUBLISHED_SLUGS = [
  'ably-cli',
  'adyen-cli',
  'adyenpayout-cli',
  'amadeus-cli',
  'chaingateway-cli',
  'clicksend-cli',
  'ebaylogistics-cli',
  'elmahio-cli',
  'faretrotter-cli',
  'gsmtasks-cli',
  'hetras-cli',
  'impalahotels-cli',
  'mastercardob-cli',
  'personio-cli',
  'plaid-cli',
  'postmark-cli',
  'salesloft-cli',
  'sendgrid-cli',
  'shipengine-cli',
  'shotstack-cli',
  'spectrocoin-cli',
  'spotify-cli',
  'stripe-cli',
  'telnyx-cli',
  'twilio-cli',
  'viator-cli',
  'vonagesms-cli',
  'vonagevoice-cli',
  'weatherbit-cli',
  'yodlee-cli',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://killthemcp.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        // Exclude unpublished CLI pages from sitemap
        const slug = page.replace('https://killthemcp.com/', '').replace(/\/$/, '');
        return !UNPUBLISHED_SLUGS.includes(slug);
      },
    }),
  ],
});
