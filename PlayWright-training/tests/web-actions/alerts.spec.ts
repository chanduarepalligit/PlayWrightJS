import{test,expect} from '@playwright/test'

test('alerts', async({page}) =>{
    await page.goto("https://demoqa.com/alerts")
    const alertButton = await page.locator('button#alertButton')
    page.once('dialog', async dialog =>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await alertButton.click()
})