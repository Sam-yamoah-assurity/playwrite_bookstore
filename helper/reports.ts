const report = require("multiple-cucumber-html-reporter");

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BROWSER UNDER TEST: " + process.env.BROWSER);

report.generate({
  jsonDir: "testResults/reports",
  reportPath: "testResults/reports",
  reportName: "Playwright Automation Report",
  pageTitle: "BookCart App Test report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Book Cart Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});