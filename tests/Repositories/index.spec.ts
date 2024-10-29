import test, { expect } from '@playwright/test'

test.describe('Repositories', () => {
  test('Should return NotFound user', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    input.fill('FehSouzaFehSouzaFehSouza')
    input.press('Enter')

    const notFound = page.getByTestId('not-found-error')
    await expect(notFound).toBeVisible()
    await expect(notFound).toBeInViewport()
  })

  test('Should search for a user`s repositories', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const button = page.getByRole('search')
    await expect(button).toBeVisible()
    await expect(button).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    button.click()

    const url = `https://github-catalog.vercel.app/repositorios/${user}`

    await page.waitForURL(url)
    expect(page.url()).toContain(url)
  })

  test('Should not return repositories', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = '9'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/repositorios/${user}`
    await page.waitForURL(url)

    const noData = page.getByTestId('repositories-page-no-data')
    await expect(noData).toBeVisible()
    await expect(noData).toBeInViewport()
  })
})
