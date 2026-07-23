import{test,expect} from '@playwright/test'

test('frames', async ({page}) => {
    await page.goto("https://demoqa.com/frames")
    const mainWindow = await page.locator('h1.text-center')
    const frame = await page.frameLocator('iframe#frame1')
    const frameWindow = await frame.locator('h1#sampleHeading')
    console.log(await mainWindow.textContent())
    console.log(await frameWindow.textContent())
})

test('shadow DOM', async ({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/')
    await page.screenshot({path:'screenshots/before.png', fullPage: true})
    const userName = await page.locator('input[title="user name field"]')
    userName.fill('Chandu')
    await page.screenshot({path:'screenshots/after.png', fullPage : true})

})