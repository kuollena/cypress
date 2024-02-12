import { desktopBrowsers, mobileBrowsers, tabletBrowsers } from './browserConfig';
const allBrowsers = { ...desktopBrowsers, ...mobileBrowsers, ...tabletBrowsers };

export function launchBrowser(browser, launchOptions, resolution: string = '1920x1080') {
  const [width, height] = resolution.includes('x')
    ? resolution.split('x').map((size) => parseInt(size, 10))
    : [1920, 1080];
  const browserType = process.env.BROWSER_TYPE || 'desktop';
  let browserConfigKey = `${browserType}_${resolution}`;
  let browserConfig = allBrowsers[browserConfigKey];

  console.log(
    '### Browser configuration used: %s ### ' +
    'Setting the browser window size to %s x %s',
    browserConfigKey,
    width,
    height,
  );

  if (browser.family === 'firefox') {
    launchOptions.preferences['width'] = browserConfig.width;
    launchOptions.preferences['height'] = browserConfig.height;
    launchOptions.preferences['general.useragent.override'] = browserConfig.userAgent;
  }

  // Chrome, Edge
  else {
    launchOptions.args.push(`--window-size=${browserConfig.width},${browserConfig.height}`);
    launchOptions.args.push(`--user-agent=${browserConfig.userAgent}`);

    if (browserConfig.deviceScaleFactor) {
      launchOptions.args.push(`--force-device-scale-factor=${browserConfig.deviceScaleFactor}`);

      if (browser.family === 'chromium') {
        launchOptions.args.push('--disable-dev-shm-usage');
      }
    }
    return launchOptions;
  }
}
