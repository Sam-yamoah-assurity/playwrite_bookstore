import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";


let page: Page;
let browser: Browser;
setDefaultTimeout(60 * 1000);

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    pageFixture.page = page;
})

After(async function () {
    await page.close();
    await browser.close();
})