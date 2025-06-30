import { test, expect } from '@playwright/test';

test('siryoung exchange website test', async ({ page }) => {
  await page.goto('https://siryoung-exchange.vercel.app/');

  // Wait for the 'FAQs' text to be present in the DOM before attempting to click.
  await page.waitForSelector('text=FAQs', { state: 'visible', timeout: 10000 });
  await page.getByText('FAQs').first().click();

  // It's generally good practice to wait for elements you interact with.
  // Adding waits for the accordion items as well, especially if they animate.
  await page.waitForSelector('div:has-text("How does it work ?")');
  await page.locator('div').filter({ hasText: /^How does it work \?$/ }).getByRole('img').click();
  await page.locator('div').filter({ hasText: /^How does it work \?$/ }).getByRole('img').click();

  await page.waitForSelector('div:has-text("How fast will I get paid ?")');
  await page.locator('div').filter({ hasText: /^How fast will I get paid \?$/ }).getByRole('img').click();
  await page.locator('div').filter({ hasText: /^How fast will I get paid \?$/ }).getByRole('img').click();

  await page.waitForSelector('div:has-text("How do I receive payments ?")');
  await page.locator('div').filter({ hasText: /^How do I receive payments \?$/ }).getByRole('img').click();
  await page.locator('div').filter({ hasText: /^How do I receive payments \?$/ }).getByRole('img').click();

  await page.waitForSelector('div:has-text("Is SirYoung Exchange legit ?")');
  await page.locator('div').filter({ hasText: /^Is SirYoung Exchange legit \?$/ }).getByRole('img').click();
  await page.locator('div').filter({ hasText: /^Is SirYoung Exchange legit \?$/ }).getByRole('img').click();

  // Navigation to Company links
  await page.getByText('Company').first().click();
  await page.getByText('Contact us').first().click();

  // --- Fix for the 'About us' click issue ---
  // Wait for 'About us' link to be visible after clicking 'Company' or 'Contact us'.
  await page.waitForSelector('text=About us', { state: 'visible', timeout: 10000 });
  // Re-evaluate if .nth(1) is truly necessary or if .first() or no .nth() is better
  await page.getByText('About us').nth(1).click();
  // If .nth(1) continues to fail, try:
  // await page.getByText('About us').first().click();
  // Or if it's a link in a specific section (e.g., footer):
  // await page.getByRole('link', { name: 'About us' }).click();
  // --- End of fix ---

  await page.getByText('Privacy Policy').first().click();
  await page.getByText('Terms of use').first().click();

  // Navigation to Services and Home
  await page.getByText('Services', { exact: true }).first().click();
  await page.getByText('Home').click();

  // Navigation to Rates and specific trade links
  await page.getByRole('link', { name: 'Check rates' }).click();
  await page.getByRole('link', { name: 'Trade RAZER GOLD' }).click();
  await page.goto('https://siryoung-exchange.vercel.app/rates');
  await page.getByRole('link', { name: 'Trade STEAM WALLET' }).click();
  await page.getByText('Home').click();
  await page.getByRole('link', { name: 'Trade a card' }).click();

  // Registration form interaction
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Enter your full name' }).click();
  await page.getByRole('textbox', { name: 'Enter your full name' }).fill('itama david');
  await page.getByRole('textbox', { name: 'Enter your full name' }).press('Tab');
  await page.getByRole('textbox', { name: 'example@example.comm' }).fill('tokuraenosegbe2088@gmail.com');
  await page.getByRole('textbox', { name: 'or +2348123456789' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Clicks on various image elements
  await page.getByRole('link', { name: 'logo' }).click();
  await page.locator('.lg\\:w-4\\/5 > div:nth-child(2) > img').click();
  await page.locator('div:nth-child(3) > img').click();
  await page.locator('.lg\\:w-4\\/5.w-full > div:nth-child(4) > img').click();
  await page.locator('div:nth-child(6) > img').click();
  await page.locator('div:nth-child(5) > img').click();
  await page.locator('div:nth-child(7) > img').click();
  await page.locator('div:nth-child(8) > img').click();
  await page.locator('div:nth-child(9) > img').click();
});