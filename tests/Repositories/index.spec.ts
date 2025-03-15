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

  test('Should return repositories', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/repositorios/${user}`
    await page.waitForURL(url)

    const repository = page.getByTestId('repository-card-0')
    await expect(repository).toBeVisible()
    await expect(repository).toBeInViewport()
  })

  test('Should navigate for a GitHub`s repository', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/repositorios/${user}`
    await page.waitForURL(url)

    const repository = page.getByTestId('repository-card-0')

    const link = repository.getByTestId('card-link')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    link.click()

    const newPage = await page.waitForEvent('popup')
    expect(newPage.url()).toContain(linkHref)
  })

  test('Should navigate for a homepage`s repository', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/repositorios/${user}`
    await page.waitForURL(url)

    const link = page.getByTestId('card-link-homepage')
    await expect(link).toBeVisible()
    await link.scrollIntoViewIfNeeded()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    link.click()

    const newPage = await page.waitForEvent('popup')
    expect(newPage.url()).toContain(linkHref)
  })

  test('Should show and hidden the repository description', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/repositorios/${user}`
    await page.waitForURL(url)

    const repository = page.getByTestId('repository-card-0')

    const button = repository.getByTestId('repository-card-button')
    const description = repository.getByTestId('repository-card-description')

    await expect(button).toBeVisible()
    await expect(button).toBeInViewport()
    await expect(description).not.toBeVisible()
    await expect(description).not.toBeInViewport()

    button.click()

    await expect(description).toBeVisible()
    await expect(description).toBeInViewport()

    button.click()

    await expect(description).not.toBeVisible()
    await expect(description).not.toBeInViewport()
  })

  test('Should have pagination', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios/FehSouza?page=1')

    const pagination = page.getByTestId('pagination')
    await expect(pagination).toBeVisible()
    await pagination.scrollIntoViewIfNeeded()
    await expect(pagination).toBeInViewport()
  })
})
