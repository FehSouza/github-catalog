import test, { expect } from '@playwright/test'

test.describe('Followers', () => {
  test('Should return NotFound user', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/seguidores')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    input.fill('FehSouzaFehSouzaFehSouza')
    input.press('Enter')

    const notFound = page.getByTestId('not-found-error')
    await expect(notFound).toBeVisible()
    await expect(notFound).toBeInViewport()
  })

  test('Should search for a user`s followers', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/seguidores')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const button = page.getByRole('search')
    await expect(button).toBeVisible()
    await expect(button).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    button.click()

    const url = `https://github-catalog.vercel.app/seguidores/${user}`

    await page.waitForURL(url)
    expect(page.url()).toContain(url)
  })

  test('Should return followers', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/seguidores')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/seguidores/${user}`
    await page.waitForURL(url)

    const follower = page.getByTestId('follower-card-0')
    await expect(follower).toBeVisible()
    await expect(follower).toBeInViewport()
  })

  test('Should navigate for a GitHub`s follower', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/seguidores')

    const input = page.getByRole('searchbox')
    await expect(input).toBeVisible()
    await expect(input).toBeInViewport()

    const user = 'FehSouza'

    input.fill(user)
    input.press('Enter')

    const url = `https://github-catalog.vercel.app/seguidores/${user}`
    await page.waitForURL(url)

    const follower = page.getByTestId('follower-card-0')

    const link = follower.getByTestId('card-link')
    await expect(link).toBeVisible()
    await expect(link).toBeInViewport()

    const linkHref = await link.getAttribute('href')
    link.click()

    const newPage = await page.waitForEvent('popup')
    expect(newPage.url()).toContain(linkHref)
  })

  test('Should have pagination', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/seguidores/FehSouza?page=1')

    const pagination = page.getByTestId('pagination')
    await expect(pagination).toBeVisible()
    await pagination.scrollIntoViewIfNeeded()
    await expect(pagination).toBeInViewport()
  })
})
