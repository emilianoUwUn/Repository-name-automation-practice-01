import { test, expect } from '@playwright/test';

test('TC-001 Login válido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);
});