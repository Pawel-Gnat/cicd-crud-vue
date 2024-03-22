import { test, expect } from '@playwright/test';

test('navigation from HomePage to AboutPage', async ({ page }) => {
  await page.goto('https://cicd-crud-vue.vercel.app/');

  await expect(page.locator('input[placeholder="Add new task"]')).toBeVisible();
  await expect(page.locator('button:text("Add task")')).toBeVisible();

  await page.getByRole('link', { name: 'Go to About' }).click();
  await expect(page.getByRole('heading', { name: 'About Page' })).toBeVisible();
});
