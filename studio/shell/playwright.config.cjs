const path = require("node:path");

module.exports = {
  testDir: __dirname,
  testMatch: "browser-proof.spec.cjs",
  outputDir: path.join(__dirname, "evidence", "test-results"),
  reporter: [["line"]],
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:8765",
    browserName: "chromium",
    colorScheme: "dark",
    trace: "retain-on-failure"
  },
  webServer: {
    command: "python3 -m http.server 8765 --bind 127.0.0.1",
    cwd: path.join(__dirname, "..", ".."),
    url: "http://127.0.0.1:8765/studio/shell/",
    reuseExistingServer: false,
    timeout: 30_000
  },
  projects: [
    {
      name: "desktop-1440x1000",
      use: { viewport: { width: 1440, height: 1000 } }
    },
    {
      name: "mobile-390x844",
      use: {
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 1,
        isMobile: true,
        hasTouch: true
      }
    }
  ]
};
