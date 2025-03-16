import test, { expect } from '@playwright/test'

test.describe('NotFound', () => {
  test('Should return NotFound page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/test-not-found')

    const title = page.getByTestId('not-found-page-title')
    await expect(title).toBeVisible()
    await expect(title).toBeInViewport()
  })

  test('Should return go home link in NotFound page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/test-not-found')

    const link = page.getByTestId('not-found-page-link')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()
  })

  test('Should return go home with click in link', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/test-not-found')

    const link = page.getByTestId('not-found-page-link')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    const url = `https://github-catalog.vercel.app${linkHref}`

    link.click()

    await page.waitForURL(url)
    expect(page.url()).toContain(url)
  })
})
