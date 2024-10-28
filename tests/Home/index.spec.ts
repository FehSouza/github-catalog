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

  test('Should navigate for a GitHub`s profile', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()

    const button = page.getByRole('search')
    await expect(button).toBeVisible()
    await expect(button).toBeInViewport()

    input.fill('FehSouza')
    button.click()

    const link = page.getByTestId('card-link-profile')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    link.click()

    const newPage = await page.waitForEvent('popup')
    expect(newPage.url()).toBe(linkHref)
  })

  test('Should navigate for repositories page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    input.fill('FehSouza')
    input.press('Enter')

    const link = page.getByTestId('card-link-repositories')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    await link.click()

    expect(page.url()).toBe(`https://github-catalog.vercel.app${linkHref}?page=1`)
  })

  test('Should navigate for followers page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    input.fill('FehSouza')
    input.press('Enter')

    const link = page.getByTestId('card-link-followers')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    await link.click()

    expect(page.url()).toBe(`https://github-catalog.vercel.app${linkHref}?page=1`)
  })

  test('Should return NotFound user', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    input.fill('FehSouzaFehSouzaFehSouza')
    input.press('Enter')

    const notFound = page.getByTestId('not-found-error')
    await expect(notFound).toBeVisible()
    await expect(notFound).toBeInViewport()
  })
})
