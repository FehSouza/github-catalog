import test, { expect } from '@playwright/test'

test.describe('Footer', () => {
  test('Should have Footer in the page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const footer = page.getByTestId('footer')
    await expect(footer).toBeVisible()
    await expect(footer).toBeInViewport()
  })

  test('Should have logo in the footer', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const logo = page.getByTestId('logotype')
    await expect(logo).toBeVisible()
    await expect(logo).toBeInViewport()

    await logo.click()
    expect(page.url()).toBe('https://github-catalog.vercel.app/')
  })
})
