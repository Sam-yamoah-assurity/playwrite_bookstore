import { Before, BeforeAll, After, setDefaultTimeout, AfterAll, Status, AfterStep } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";


let browser: Browser;
let context: BrowserContext
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
})

Before(async function ({ pickle}) {
    const scenarioName = `${pickle.name}-${pickle.id}`;
    context = await browser.newContext();
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
})

AfterStep(async function ({ pickle, result }) {
    // Screenshot failed Steps
    if (result?.status == Status.FAILED) {
        const img = await fixture.page.screenshot({
            path: `testResults/screenshots/${pickle.name}.png`,
            type: "png"
        });
        await this.attach(img, "image/png");
    };
})

After(async function () {
    await fixture.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
    fixture.logger.close();
})