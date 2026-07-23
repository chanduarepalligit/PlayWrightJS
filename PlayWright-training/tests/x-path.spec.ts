import{test,expect} from '@playwright/test'
test('xPath',async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.locator("ul.leftmenu > li >a[href='services.htm']").click()
})