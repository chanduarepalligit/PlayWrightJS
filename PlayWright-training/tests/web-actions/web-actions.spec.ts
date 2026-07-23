import {test, expect} from '@playwright/test'

test('web actions', async ({page})=> {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    const logo = page.locator("img.logo")
    await expect(logo).toBeVisible()
    console.log("Logo displayed successfully")
    const caption = page.locator("p.caption")
    await expect(caption).toHaveText("Experience the difference")
    console.log("caption is correct")
    await page.locator('input[name="username"]').fill("test")
    await page.locator('input[name="password"]').fill(" ")
    await page.locator('input[value="Log In"]').click();
    const error = await page.locator("p.error")
    await expect(error).toHaveText("An internal error has occurred and has been logged.")
    await page.locator("//a[text()='Admin Page']").click()
    await selectAccessMode(page,"soap")
    const loanProvider = await page.locator("select#loanProvider")
    await loanProvider.scrollIntoViewIfNeeded()
    await loanProvider.selectOption({label:'Web Service'})
    await page.locator("input[value='Submit']").click()
    console.log("Clicked on Submit button")
    const successMessage = await page.locator("//b[text()='Settings saved successfully.']")
    await expect(successMessage).toBeVisible()
    console.log("Settings saved successfully")
    await page.locator('//ul[@class="leftmenu"]//a[text()="Services"]').click()
    const bookStoreService = await page.locator('//span[text()="Bookstore services:"]')
    await expect(bookStoreService).toBeVisible()
    console.log("Book store service section displayed")
    await bookStoreService.scrollIntoViewIfNeeded()
    const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr')
    const rowCount = await rows.count()
    console.log(`Total number of rows are ${rowCount}`)
    const colums = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td')
    const columnCount = await colums.count()
    console.log(`Total number of columns are ${columnCount}`)
    for(let i=1; i<=rowCount; i++){
        for(let j=1; j<=columnCount; j++){
            const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${i}]//td[${j}]`)
            const cellData = await cell.textContent()
            console.log(`Row ${i}, Column ${j} : ${cellData}`)
        }
    }
});

async function selectAccessMode(page:any,mode:string) {
    const radio = page.locator(`input[value="${mode}"]`)
    await radio.check();
    console.log(`Selected mode is ${mode}`)
    
}