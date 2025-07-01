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
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.getByRole('link', { name: 'Find Transactions' }).click();
  await page.getByRole('link', { name: 'Update Contact Info' }).click();
  await page.getByRole('link', { name: 'Request Loan' }).click();
  await page.getByText('Solutions').click();
  await page.locator('#headerPanel').getByRole('link', { name: 'About Us' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).click();
  await page.locator('#headerPanel').getByRole('link', { name: 'Products' }).click();
  await page.goto('https://parabank.parasoft.com/parabank/services.htm');
  await page.locator('#headerPanel').getByRole('link', { name: 'Locations' }).click();
  await page.goto('https://parabank.parasoft.com/parabank/services.htm');
  await page.getByRole('link', { name: 'Admin Page' }).click();
  await page.locator('#accessMode2').check();
  await page.locator('#accessMode1').check();
  await page.locator('#accessMode3').check();
  await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();

    // TEST CREATE ACCOUNT BUTTON AND TEST LOGIN BUTTON WITH THE WRONG DETAIL

  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('INDONESI');
  await page.locator('[id="customer.firstName"]').press('Tab');
  await page.locator('[id="customer.lastName"]').fill('ENDO');
  await page.locator('[id="customer.lastName"]').press('Tab');
  await page.locator('[id="customer.address.street"]').fill('11, KEREMI STREET');
  await page.locator('[id="customer.address.street"]').press('Tab');
  await page.locator('[id="customer.address.city"]').fill('IBADAN');
  await page.locator('[id="customer.address.city"]').press('Tab');
  await page.locator('[id="customer.address.state"]').fill('OYO');
  await page.locator('[id="customer.address.state"]').press('Tab');
  await page.locator('[id="customer.address.zipCode"]').fill('11233449');
  await page.locator('[id="customer.address.zipCode"]').press('Tab');
  await page.locator('[id="customer.phoneNumber"]').fill('1234567890');
  await page.locator('[id="customer.phoneNumber"]').press('Tab');
  await page.locator('[id="customer.ssn"]').fill('23054');
  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('JOHN123');
  await page.locator('[id="customer.username"]').press('Tab');
  await page.locator('[id="customer.password"]').fill('DEMO123');
  await page.locator('[id="customer.password"]').press('Tab');
  await page.locator('#repeatedPassword').fill('DEMO123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('internet');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('heroku');
  await page.locator('input[name="password"]').press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();


    // E2E TESTING: Login, transfer funds, confirm success AND BILL PAYMENTS
   await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('2000');
  await page.locator('#fromAccountId').selectOption('12900');
  await page.locator('#toAccountId').selectOption('13344');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.locator('input[name="payee.name"]').click();
  await page.locator('input[name="payee.name"]').fill('electric');
  await page.locator('input[name="payee.address.street"]').click();
  await page.locator('input[name="payee.address.street"]').fill('2, adenuga crescent');
  await page.locator('input[name="payee.address.city"]').click();
  await page.locator('input[name="payee.address.city"]').fill('ibadan');
  await page.locator('input[name="payee.address.state"]').click();
  await page.locator('input[name="payee.address.state"]').fill('oyo');
  await page.locator('input[name="payee.address.zipCode"]').click();
  await page.locator('input[name="payee.address.zipCode"]').fill('1120033');
  await page.locator('input[name="payee.phoneNumber"]').click();
  await page.locator('input[name="payee.phoneNumber"]').fill('1234567890');
  await page.locator('input[name="payee.accountNumber"]').click();
  await page.locator('input[name="payee.accountNumber"]').fill('2000300045');
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('5000645632');
  await page.locator('input[name="amount"]').click();
  await page.locator('input[name="amount"]').fill('1000');
  await page.getByRole('combobox').selectOption('12789');
  await page.getByRole('button', { name: 'Send Payment' }).click();
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('2000300045');
  await page.getByRole('button', { name: 'Send Payment' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click(); 

});

