import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";

let badgeCount: any;

Given('the user searches for a {string}', async function (book) {
    fixture.logger.info(`Searching for book ${book}`);
    await fixture.page.waitForTimeout(1000);
    badgeCount = await fixture.page.locator("id=mat-badge-content-0").textContent();
    await fixture.page.locator("//input[@type='search']").fill(book);
    await fixture.page.waitForTimeout(1000);
    await fixture.page.locator(".mat-option-text").click();
});

When('the user adds the book to the cart', async function () {
    console.log(`Initial Badge count: ${badgeCount}`);
    await fixture.page.waitForTimeout(1000);
    await fixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-raised-button')]").click();
});

Then('the cart badge should get updated', async function () {
    await fixture.page.waitForTimeout(1000);
    const updatedBadgeCount = await fixture.page.locator("id=mat-badge-content-0").textContent();
    expect(Number(updatedBadgeCount)).toBeGreaterThan(Number(badgeCount));
});
