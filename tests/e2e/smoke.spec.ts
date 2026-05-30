import { expect, test, type Page } from '@playwright/test';

const ROUTES = [
  { path: '/', title: /Corporate Housing for Relocations/i },
  { path: '/about', title: /About Hostsy/i },
  { path: '/corporate-housing', title: /Corporate Housing/i },
  { path: '/hr-mobility', title: /HR & Mobility/i },
  { path: '/landlords', title: /Landlords/i },
  { path: '/locations', title: /Locations/i },
  { path: '/gallery', title: /Gallery/i },
  { path: '/contact', title: /Contact/i },
];

function collectPageErrors(page: Page) {
  const errors: string[] = [];

  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });

  page.on('pageerror', (error) => {
    errors.push(error.message);
  });

  return errors;
}

async function assertNoHorizontalOverflow(page: Page) {
  const details = await page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const offenders = Array.from(document.querySelectorAll<HTMLElement>('body *'))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);

        return {
          tag: element.tagName.toLowerCase(),
          className: typeof element.className === 'string' ? element.className : '',
          text: (element.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 80),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          display: style.display,
          visibility: style.visibility,
        };
      })
      .filter((item) => (
        item.width > 0 &&
        item.display !== 'none' &&
        item.visibility !== 'hidden' &&
        (item.left < -1 || item.right > viewportWidth + 1)
      ))
      .slice(0, 10);

    return {
      viewportWidth,
      scrollWidth,
      amount: scrollWidth - viewportWidth,
      offenders,
    };
  });

  expect(
    details.amount,
    `Expected no horizontal overflow. Details: ${JSON.stringify(details, null, 2)}`
  ).toBeLessThanOrEqual(1);
}

test.describe('site smoke checks', () => {
  for (const route of ROUTES) {
    test(`${route.path} loads without console errors or horizontal overflow`, async ({ page }) => {
      const errors = collectPageErrors(page);

      await page.goto(route.path, { waitUntil: 'domcontentloaded' });

      await expect(page).toHaveTitle(route.title);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.locator('body')).toContainText(/Hostsy|Corporate|Accommodation|Gallery/i);
      await expect(page.locator('text=/Application error|Unhandled Runtime Error|Hydration failed/i')).toHaveCount(0);

      await assertNoHorizontalOverflow(page);

      expect(errors, `Unexpected console/page errors on ${route.path}`).toEqual([]);
    });
  }

  test('mobile navigation opens and closes cleanly', async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.includes('Mobile'), 'Mobile navigation is only tested on the mobile project');

    const errors = collectPageErrors(page);

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByRole('dialog', { name: 'Navigation menu' });

    await expect(menu).toBeVisible();
    await expect(menu.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Request Accommodation' })).toBeVisible();
    await assertNoHorizontalOverflow(page);

    await menu.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toHaveCount(0);
    await assertNoHorizontalOverflow(page);

    expect(errors, 'Unexpected console/page errors in mobile nav').toEqual([]);
  });

  test('contact form validates required fields', async ({ page }) => {
    const errors = collectPageErrors(page);

    await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Submit inquiry' }).click();

    const formValidity = await page.locator('form').evaluate((form) => ({
      valid: (form as HTMLFormElement).checkValidity(),
      invalidFieldCount: form.querySelectorAll(':invalid').length,
    }));

    expect(formValidity.valid).toBe(false);
    expect(formValidity.invalidFieldCount).toBeGreaterThan(0);
    await expect(page.getByRole('heading', { name: 'Your accommodation brief is in.' })).toHaveCount(0);
    await assertNoHorizontalOverflow(page);

    expect(errors, 'Unexpected console/page errors in form validation test').toEqual([]);
  });

  test('contact form submits successfully after valid input', async ({ page }) => {
    const errors = collectPageErrors(page);

    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    await page.getByLabel('Your name').fill('Anika Roussouw');
    await page.getByLabel('Company').fill('Saxon Capital');
    await page.getByLabel('Work email').fill('anika@saxon.com');
    await page.getByLabel('Role').selectOption({ label: 'Global mobility lead' });
    await page.getByLabel('Type of placement').selectOption({ label: 'Executive relocation' });
    await page.getByLabel('Number of apartments').fill('3');
    await page.getByLabel('Preferred location').selectOption({ label: 'Brooklyn' });
    await page.getByLabel('Length of stay').selectOption({ label: '6 to 12 months' });
    await page.getByLabel('Tell us about the brief').fill('Two senior executives relocating for an eight month project.');

    await expect.poll(async () => page.locator('form').evaluate((form) => (form as HTMLFormElement).checkValidity())).toBe(true);
    await page.getByRole('button', { name: 'Submit inquiry' }).click();

    await expect(page.getByRole('heading', { name: 'Your accommodation brief is in.' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit another inquiry' })).toBeVisible();
    await assertNoHorizontalOverflow(page);

    expect(errors, 'Unexpected console/page errors in form submission test').toEqual([]);
  });
});
