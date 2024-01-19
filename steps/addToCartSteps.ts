import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

let badgeCount: any;

Given('the user searches for a {string}', async function (book) {
    pageFixture.logger.info(`Searching for book ${book}`);
    await pageFixture.page.waitForTimeout(1000);
    badgeCount = await pageFixture.page.locator("id=mat-badge-content-0").textContent();
    await pageFixture.page.locator("//input[@type='search']").fill(book);
    await pageFixture.page.waitForTimeout(1000);
    await pageFixture.page.locator(".mat-option-text").click();
});

When('the user adds the book to the cart', async function () {
    console.log(`Initial Badge count: ${badgeCount}`);
    await pageFixture.page.waitForTimeout(1000);
    await pageFixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-raised-button')]").click();
});

Then('the cart badge should get updated', async function () {
    await pageFixture.page.waitForTimeout(1000);
    const updatedBadgeCount = await pageFixture.page.locator("id=mat-badge-content-0").textContent();
    expect(Number(updatedBadgeCount)).toBeGreaterThan(Number(badgeCount));
});
