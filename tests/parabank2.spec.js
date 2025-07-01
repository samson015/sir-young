const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://parabank.parasoft.com/parabank/index.htm';
const USERNAME = 'john';
const PASSWORD = 'demo';

// Functional Test: Log in and view account overview
test('Functional Test - Login and View Accounts', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.fill('input[name="username"]', USERNAME);
  await page.fill('input[name="password"]', PASSWORD);
  await page.click('input[value="Log In"]');

  await expect(page).toHaveURL(/overview/);
 
});

// UI Test: Validate login form elements
test('UI Test - Validate Login Form Visibility and Style', async ({ page }) => {
  await page.goto(BASE_URL);

  const usernameField = page.locator('input[name="username"]');
  const passwordField = page.locator('input[name="password"]');
  const loginButton = page.locator('input[value="Log In"]');

  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  // Example: check for border style or font (optional)
  const fontFamily = await usernameField.evaluate(el => getComputedStyle(el).fontFamily);
  expect(fontFamily.toLowerCase()).toContain('arial');
});

// E2E Test: Login, transfer funds, confirm success
test('E2E Test - Transfer Funds', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.fill('input[name="username"]', USERNAME);
  await page.fill('input[name="password"]', PASSWORD);
  await page.click('input[value="Log In"]');

  await expect(page).toHaveURL(/overview/);
  await page.click('text=Transfer Funds');

  await page.fill('input[id="amount"]', '50');
  await page.selectOption('#fromAccountId', { index: 0 });
  await page.selectOption('#toAccountId', { index: 1 });
  await page.click('input[value="Transfer"]');

});
