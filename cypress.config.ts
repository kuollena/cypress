import dotenv from 'dotenv';
import { launchBrowser } from './cypress/support/browserLauncher';
dotenv.config();
require('dotenv').config({ path: `.env${process.env.E2E_ENV}` });
const { defineConfig } = require('cypress');

const resolution: string = process.env.RESOLUTION || '1920x1080';
const [width, height] = resolution.includes('x')
  ? resolution.split('x').map((size) => parseInt(size, 10))
  : [1920, 1080];

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        return launchBrowser(browser, launchOptions, process.env.RESOLUTION);
      });

      config.env.url = process.env.CYPRESS_ENV_URL;

      console.log(config.env);
      return Object.assign(config);
    },
    baseUrl: process.env.CYPRESS_ENV_URL,
    viewportWidth: width,
    viewportHeight: height,
    video: true,
    videoUploadOnPasses: true,
  },
});
