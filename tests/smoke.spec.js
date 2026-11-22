import { expect, test } from '@playwright/test';

async function openNavigation(page) {
  const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
  const toggle = navigation.getByRole('button', { name: 'Menu', exact: true });
  if (await toggle.isVisible()) {
    await toggle.click();
  }
  return navigation;
}

test('navigation reaches portfolio pages and serves the resume', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'Technical Skills.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Work Experience.' })).toBeVisible();

  for (const destination of [
    { name: 'Projects', path: '/projects', heading: 'My Projects' },
    { name: 'Contact Me', path: '/contact', heading: "Let's Connect" },
    { name: 'About Me', path: '/about', heading: "Hello, I'm Puneet 👋🏽" },
  ]) {
    const navigation = await openNavigation(page);
    await navigation.getByRole('link', { name: destination.name, exact: true }).click();
    await expect(page).toHaveURL(destination.path);
    await expect(page.getByRole('heading', { name: destination.heading, exact: true })).toBeVisible();
    await expect(navigation.locator(`a[href="${destination.path}"]`)).toHaveAttribute('aria-current', 'page');
  }

  const navigation = await openNavigation(page);
  const resume = navigation.getByRole('link', { name: 'Resume', exact: true });
  await expect(resume).toHaveAttribute('target', '_blank');
  const response = await page.request.get(await resume.getAttribute('href'));
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/pdf');

  await navigation.getByRole('link', { name: 'Home', exact: true }).click();
  await expect(page).toHaveURL('/');
  await expect(navigation.locator('a[href="/"]')).toHaveAttribute('aria-current', 'page');
  expect(errors).toEqual([]);
});

test('mobile menu fits the screen and supports keyboard dismissal', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The expandable menu is shown on small screens.');
  await page.goto('/about');
  const navigation = await openNavigation(page);
  const links = navigation.getByRole('link');
  await expect(links).toHaveCount(5);
  const width = page.viewportSize().width;
  for (const link of await links.all()) {
    await expect(link).toBeVisible();
    const box = await link.boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(width);
    expect(box.height).toBeGreaterThanOrEqual(44);
  }

  await navigation.getByRole('link', { name: 'Projects', exact: true }).focus();
  await page.keyboard.press('Escape');
  const toggle = navigation.getByRole('button', { name: 'Menu', exact: true });
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(links.first()).toBeHidden();

  await toggle.click();
  await navigation.getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL('/projects');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('the island renders and shows the appropriate exploration hint', async ({ page, isMobile }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('section[aria-busy="false"]')).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('canvas')).toBeVisible();
  await expect(page.getByText(
    isMobile ? 'Swipe to explore the island' : 'Use your keyboard to explore',
    { exact: true },
  )).toBeVisible();
  const island = await page.evaluate(() => performance.getEntriesByType('resource')
    .find((entry) => /baker_and_the_bridge.*\.glb/.test(entry.name))?.encodedBodySize);
  expect(island).toBeGreaterThan(0);
  expect(island).toBeLessThan(15_000_000);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(page.viewportSize().width);
  expect(errors).toEqual([]);
});

test('arrow keys rotate the island to another portfolio section', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Keyboard exploration is checked at the desktop viewport.');
  await page.goto('/');
  await expect(page.locator('section[aria-busy="false"]')).toBeVisible({ timeout: 30_000 });
  try {
    for (let step = 0; step < 10; step += 1) {
      await page.keyboard.down('ArrowRight');
    }
    await expect(page.getByRole('link', { name: 'Click here!', exact: true })).toBeVisible();
  } finally {
    await page.keyboard.up('ArrowRight');
  }
});
