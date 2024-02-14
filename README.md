# Overview

This project is based on Cypress testing framework and used as an example of E2E testing wide configuration.

Here you can find solutions for management:

1. Environment data
2. Browser and arguments
3. Screen size and type

## Env Configuration

The app configuration is managed through environment variables and `.env` files loaded using [dotenv](https://www.npmjs.com/package/dotenv) and [cross-env ^7.0.3](https://www.npmjs.com/package/cross-env).

Create a `.env` file, and / or specify the environment variables.

`.env` file should be stored in the project directory, in same folder with `package.json` file.

**Example with DEV file:**
To run the tests in DEV, create `.env.dev` file

## Browser Configuration & Screen configuration

Preferable browser is directly passed to the framework using cmd. Beside of this main configuration is managed in cypress.config.ts, but default setting doesn't manage browser arguments and it's not flexible enough for some project needs.

Checkout for `browserLauncher.ts` and `browserConfig.ts` files located in `support` folder.

## CI/CD Config

Contains `yaml` config in `workflows`. The config provides options to manipulate with:

1. Environment
2. Browser
3. Platform type
4. Screen size

### `cypress test run`

The command to run tests looks like:

npx cross-env E2E_ENV=.`%environment` BROWSER_TYPE=`platform` RESOLUTION=`resolution` cypress run --browser `browser`

Some parts can be pre-defined and stored in package.json scrips or support files.

## Learn More

To learn Cypress, check out the [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress).
