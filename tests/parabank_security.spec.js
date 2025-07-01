// using wrong login information to test if website has weak security
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('smile');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('maleekberry');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await page.locator('input[name="username"]').fill('smilinggg');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('windderful');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});
// despite using fake login or wrong login test shows security system is very weak