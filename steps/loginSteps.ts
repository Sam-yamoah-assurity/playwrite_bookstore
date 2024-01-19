import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";


Given('User navigates to the application', {timeout : 20 * 1000}, async function () {
  await fixture.page.goto(process.env.BASEURL);
  fixture.logger.info("Navigated to the application");
});

Given('User clicks on the login link', async function () {
  await fixture.page.locator("//span[text()='Login']").click();
  fixture.logger.info("User clicked on login button");

});

Given('the user enters the username as {string}', async function (username) {
  await fixture.page.locator("input[formcontrolname='username']").fill(username)
});

Given('the user enters the password as {string}', async function (password) {
  await fixture.page.locator("input[formcontrolname='password']").fill(password)
});

When('the user clicks on the login button', async function () {
  await fixture.page.locator("button[color='primary']").click();
});

Then('the login should be successful', async function () {
  const text = await fixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]").textContent();
  console.log("Username " + text);
});

Then('the login should be unsuccessful', async function () {
  const failureMessage = fixture.page.locator("mat-error[role='alert']");
  await expect(failureMessage).toBeVisible();
});
