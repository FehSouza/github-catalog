import test, { expect } from '@playwright/test'

test.describe('Home', () => {
  test('Must search for a user', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    input.fill('FehSouza')
    input.press('Enter')

    const card = page.getByTestId('user-card')
    await expect(card).toBeVisible()
    await expect(card).toBeInViewport()
  })
})
