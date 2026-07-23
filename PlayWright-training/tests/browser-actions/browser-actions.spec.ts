import{test,expect, chromium} from '@playwright/test'

test('browser launch',async({})=>{
    //to launch browser engine like chrome.exe
    let browserEngine = await chromium.launch({headless:false})
    //to launch the browser context with browser engine like with cookies,storage,permissions
    let browserContext = await browserEngine.newContext()
    //to clear cookies
    await browserContext.clearCookies();
    //to launch new page within the browser context
    const page = await browserContext.newPage()
    //to set page resolution
    await page.setViewportSize({height:1080,width:1920})
    await page.goto("https://www.google.com/")
    expect(page).toHaveTitle("Google")
    await page.goto("https://playwright.dev/")
    await page.goBack()
    await page.goForward()
    await page.reload()
    const newTab = await browserContext.newPage()
    await newTab.goto("https://www.selenium.dev/")
    await page.bringToFront()
    const url = page.url()
    expect(url).toBe("https://playwright.dev/")
    await browserContext.close()
    await browserEngine.close()

});