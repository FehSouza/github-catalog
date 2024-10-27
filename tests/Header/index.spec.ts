import test, { expect } from '@playwright/test'

test.describe('Header', () => {
  test('Should have header in the page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const header = page.getByTestId('header')
    await expect(header).toBeVisible()
    await expect(header).toBeInViewport()
  })

  test('Should have logo in the page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const logo = page.getByTestId('logo')
    await expect(logo).toBeVisible()
    await expect(logo).toBeInViewport()

    await logo.click()
    expect(page.url()).toBe('https://github-catalog.vercel.app/')
  })
})
