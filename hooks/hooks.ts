import { Before, BeforeAll, After, setDefaultTimeout, AfterAll, Status, AfterStep } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";


let browser: Browser;
let context: BrowserContext
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
})

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
})

AfterStep(async function ({ pickle, result }) {
    // Screenshot failed Steps
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({
            path: `testResults/screenshots/${pickle.name}.png`,
            type: "png"
        });
        await this.attach(img, "image/png");
    };
})

After(async function () {
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
})