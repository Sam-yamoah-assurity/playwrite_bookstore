import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";


Given('User navigates to the application', {timeout : 20 * 1000}, async function () {
  await pageFixture.page.goto(process.env.BASEURL);
});

Given('User clicks on the login link', async function () {
  await pageFixture.page.locator("//span[text()='Login']").click();

});

Given('the user enters the username as {string}', async function (username) {
  await pageFixture.page.locator("input[formcontrolname='username']").fill(username)
});

Given('the user enters the password as {string}', async function (password) {
  await pageFixture.page.locator("input[formcontrolname='password']").fill(password)
});

When('the user clicks on the login button', async function () {
  await pageFixture.page.locator("button[color='primary']").click();
});

Then('the login should be successful', async function () {
  const text = await pageFixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]").textContent();
  console.log("Username " + text);
});

Then('the login should be unsuccessful', async function () {
  const failureMessage = pageFixture.page.locator("mat-error[role='alert']");
  await expect(failureMessage).toBeVisible();
});
