import { languages } from '../../src/i18n/languages'
import test, { expect } from '@playwright/test'

test.describe('Header', () => {
  test('Should have header in the page', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const header = page.getByTestId('header')
    await expect(header).toBeVisible()
    await expect(header).toBeInViewport()
  })

  test('Should have logo in the header', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/repositorios')

    const logo = page.getByTestId('logo')
    await expect(logo).toBeVisible()
    await expect(logo).toBeInViewport()

    await logo.click()
    expect(page.url()).toBe('https://github-catalog.vercel.app/')
  })

  test('Should navigate for other page behind the menu', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const itemMenu = page.getByTestId('menu-item-link-0')
    await expect(itemMenu).toBeVisible()
    await expect(itemMenu).toBeInViewport()

    const url = await itemMenu.getAttribute('href')

    await itemMenu.click()
    expect(page.url()).toContain(url)
  })

  test('Should show the options of languages', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const buttonLanguages = page.getByTestId('switch-languages')
    await expect(buttonLanguages).toBeVisible()
    await expect(buttonLanguages).toBeInViewport()

    await buttonLanguages.click()

    const language1 = page.getByTestId('switch-languages-item-0')
    await expect(language1).toBeVisible()
    await expect(language1).toBeInViewport()

    const language2 = page.getByTestId('switch-languages-item-1')
    await expect(language2).toBeVisible()
    await expect(language2).toBeInViewport()
  })

  test('Should change behind the languages', async ({ page }) => {
    await page.goto('https://github-catalog.vercel.app/')

    const buttonLanguages = page.getByTestId('switch-languages')
    await buttonLanguages.click()

    const language1 = page.getByTestId('switch-languages-item-0')
    const ariaLanguage1 = await language1.getAttribute('aria-label')
    const textLanguage1 = languages['en-US'].translation.Header.portuguese
    expect(ariaLanguage1).toBe(textLanguage1)

    const language2 = page.getByTestId('switch-languages-item-1')
    const ariaLanguage2 = await language2.getAttribute('aria-label')
    const textLanguage2 = languages['en-US'].translation.Header.english
    expect(ariaLanguage2).toBe(textLanguage2)

    await language1.click()

    const ariaLanguage1After = await language1.getAttribute('aria-label')
    const textLanguage1After = languages['pt-BR'].translation.Header.portuguese
    expect(ariaLanguage1After).toBe(textLanguage1After)

    const ariaLanguage2After = await language2.getAttribute('aria-label')
    const textLanguage2After = languages['pt-BR'].translation.Header.english
    expect(ariaLanguage2After).toBe(textLanguage2After)
  })
})
