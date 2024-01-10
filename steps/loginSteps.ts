import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User navigates to the application', {timeout : 20 * 1000}, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://bookcart.azurewebsites.net/");
});

Given('User clicks on the login link', async function () {
  await page.locator("//span[text()='Login']").click();

});

Given('the user enters the username as {string}', async function (username) {
  await page.locator("input[formcontrolname='username']").fill(username)
});

Given('the user enters the password as {string}', async function (password) {
  await page.locator("input[formcontrolname='password']").fill(password)
});

When('the user clicks on the login button', async function () {
  await page.locator("button[color='primary']").click();
});

Then('the login should be successful', async function () {
  const text = await page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]").textContent();
  console.log("Username " + text);
  await browser.close();
});

Then('the login should be unsuccessful', async function () {
  const failureMessage = page.locator("mat-error[role='alert']");
  await expect(failureMessage).toBeVisible();
  await browser.close();
});
