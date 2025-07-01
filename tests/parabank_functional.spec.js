import { test, expect } from '@playwright/test';
//functionality testing (unit testing, integration, system, sanity, smoke and regression testing) 
 // TEST LOGIN AND LOGOUT BUTTON, ALL BUTTON FUNCTIONALITY LIKE TRANSFER FUNDS, BILL PAY, FIND TRANSACTIONS ETC

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'About Us' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Locations' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Admin Page' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.getByRole('link', { name: 'Find Transactions' }).click();
  await page.getByRole('link', { name: 'Update Contact Info' }).click();
  await page.getByRole('link', { name: 'Request Loan' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});