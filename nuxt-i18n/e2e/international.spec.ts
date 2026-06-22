import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/international');

  await expect(page.getByTestId('main-heading')).toBeVisible();
  await expect(page.getByTestId('main-heading')).toContainText('Hallo!');
  await expect(page.getByTestId('lib-component')).toContainText('Hallo aus der Bibliothek!');
  await expect(page.getByTestId('switchLang__lib')).toBeVisible();
  await expect(page.getByTestId('switchLang__fe')).toBeVisible();

  await page.getByTestId('switchLang__lib').click();
  await expect(page.getByTestId('main-heading')).toContainText('Hallo!');
  await expect(page.getByTestId('lib-component')).toContainText('Hello from the library!');

  await page.getByTestId('switchLang__lib').click();
  await expect(page.getByTestId('main-heading')).toContainText('Hallo!');
  await expect(page.getByTestId('lib-component')).toContainText('Hallo aus der Bibliothek!');

  await page.getByTestId('switchLang__fe').click();
  await expect(page.getByTestId('main-heading')).toContainText('Hello!');
  await expect(page.getByTestId('lib-component')).toContainText('Hello from the library!');

  await page.getByTestId('switchLang__lib').click();
  await expect(page.getByTestId('main-heading')).toContainText('Hello!');
  await expect(page.getByTestId('lib-component')).toContainText('Hallo aus der Bibliothek!');

  await page.getByTestId('switchLang__fe').click();
  await expect(page.getByTestId('main-heading')).toContainText('Hallo!');
  await expect(page.getByTestId('lib-component')).toContainText('Hallo aus der Bibliothek!');
});
