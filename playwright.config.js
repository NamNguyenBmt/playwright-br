/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: true, // Chạy ở chế độ không giao diện
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium', // Mặc định dùng Chromium
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
};
module.exports = config;