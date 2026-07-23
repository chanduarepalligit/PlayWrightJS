import{test,expect} from '@playwright/test'
test('demo qa', async ({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    const pageHeader = await page.locator('//h1[text()="Practice Form"]')
    await expect(pageHeader).toBeVisible()
    await page.locator("input#firstName").fill("Chandu")
    await page.locator("input#lastName").fill("Arepalli")
    await page.locator("input#userEmail").fill("chandu.a@gmail.com")
    await selectGender(page,"Male")
    await page.locator('input[id="userNumber"]').fill("8989898989")
    await selectDate(page,"1992","April","10")
    const subject:string[] = ["Computer Science","English"]
    await selectSubject(page,subject)
    const hobbies:string[] = ['Sports','Music']
    await selectHobbies(page,hobbies)
    const fileUpload = await page.locator('input[id="uploadPicture"]')
    const filePath = "files/21.jpg"
    await fileUpload.setInputFiles(filePath)
    await page.locator('button#submit').click()

})

async function selectGender(page:any,gender:string){
    const gen = await page.locator(`input[value="${gender}"]`)
    await gen.check();
    console.log(`Selected gender is ${gender}`)
}

async function selectDate(page:any, year:string, month:string, date:string){
    const calendar = await page.locator('input[id="dateOfBirthInput"]')
    await calendar.click()
    const selectMonth = await page.locator('select.react-datepicker__month-select')
    await selectMonth.selectOption({label:`${month}`})
    const selectYear = await page.locator('select.react-datepicker__year-select')
    await selectYear.selectOption({label:year})
    const selectDate = await page.locator(`//div[contains(@aria-label, '${month}') and text()='${date}']`)
    await selectDate.click();

}

async function selectSubject(page:any, subjects:string[]){
    const selectSubject = await page.locator('div[class *="subjects-auto-complete__input-container"]')
    await selectSubject.click()
    const subjectInputInternal = await page.locator('input[id="subjectsInput"]')
    for (const subject of subjects){
        await subjectInputInternal.fill(subject)
        await subjectInputInternal.press('Enter')
    }
}

async function selectHobbies(page:any,hobbies:string[]){
    for(const hobby of hobbies){
        const hobbyLocator = await page.locator(`//label[text()="${hobby}"]`)
        await hobbyLocator.click()
    }
}