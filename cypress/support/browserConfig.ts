// Desktop browsers configurations
export const desktopBrowsers = {
  'desktop_1536x864': {
    width: 1536,
    height: 864,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  },
  'desktop_1920x1080': {
    width: 1920,
    height: 1080,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

// Mobile browsers configurations
export const mobileBrowsers = {
  'mobile_360x760': {
    name: 'Samsung s10',
    width: 360,
    height: 760,
    deviceScaleFactor: 3,
    mobile: true,
    orientation: 'portrait',
    userAgent: 'Mozilla/5.0 (Android 14.0) Chrome/121.0.6167.160'
  },
  'mobile_414x846': {
    name: 'Samsung Note 9',
    width: 414,
    height: 846,
    deviceScaleFactor: 3,
    mobile: true,
    orientation: 'portrait',
    userAgent: 'Mozilla/5.0 (Android 14.0) Chrome/121.0.6167.160'
  },
};

// Tablet devices configurations
export const tabletBrowsers = {
  'tablet_810x1080': {
    name: 'Samsung Galaxy Tab A',
    width: 810,
    height: 1080,
    deviceScaleFactor: 2,
    mobile: false,
    orientation: 'portrait',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-T870) Chrome/121.0.6167.160'
  },
  'tablet_800x1280': {
    name: 'Google Nexus 9, Samsung Galaxy Tab S2',
    width: 800,
    height: 1280,
    deviceScaleFactor: 2,
    mobile: false,
    orientation: 'portrait',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Nexus 9) Chrome/121.0.6167.160'
  }
};
