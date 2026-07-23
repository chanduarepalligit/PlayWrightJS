import{Page, Locator, expect} from '@playwright/test'

export class WebCommons{
    page : Page
    constructor(page : Page){
        this.page = page
    }
    async element(locator:string) :Promise<Locator>{
        return this.page.locator(locator)
    }

    async launchApplication(url:string, title?:string) : Promise<void>{
        await this.page.goto(url)
        if(title){
            await expect(this.page).toHaveTitle(title)
        }
    }
    async scrollIntoView(locator:string):Promise <void> {
        const element = await this.element(locator)
        await element.scrollIntoViewIfNeeded()
    }
    async clickElement(locator:string):Promise<void>{
        const element = await this.element(locator)
        await element.click()
    }
    async doubleClickElement(locator:string):Promise<void>{
        const element = await this.element(locator)
        await element.dblclick()
    }
    async rightClickElement(locator:string):Promise<void>{
        const element = await this.element(locator)
        await element.click({button:'right'})
    }
    async fillElement(locator:string,text:string):Promise<void>{
        const element = await this.element(locator)
        await element.clear()
        await element.fill(text)
    }
    async selectOption(locator:string,option:string):Promise<void>{
        const element = await this.element(locator)
        await element.selectOption(option)
    }
    async checkCheckBox(locator:string):Promise<void>{
        const element = await this.element(locator)
        if(! await element.isChecked()){
            await element.check()
        }
    }
    async getElementText(locator:string):Promise<string>{
        const element = await this.element(locator)
        return await element.textContent() || ''
    }
    async compareText(actual:string,expected:string):Promise<void>{
        expect (actual.trim()).toContain(expected.trim())

    }
    async getAttributeValue(locator:string,attribute:string):Promise<string | null>{
        const element = await this.element(locator)
        return await element.getAttribute(attribute)
    }

    async isElementVisible(locator:string):Promise<boolean>{
        const element = await this.element(locator)
        return await element.isVisible()
    }
    async isElementDisabled(locator:string):Promise<boolean>{
        const element = await this.element(locator)
        return await element.isHidden()
    }
    async uploadFile(locator:string, filepath:string):Promise<void>{
        const element = await this.element(locator)
        await element.setInputFiles(filepath)
    }
    async alertHandle(action:'accept' | 'dismiss '):Promise<void>{
        this.page.once('dialog', async (dialog)=>{
            if(action === 'accept'){
                await dialog.accept()
            } else {
                await dialog.dismiss()
            }
        })        
    }
    async screenShot(filePath:string):Promise<void>{
        await this.page.screenshot({path:filePath})
    }
    async refreshPage():Promise<void>{
        await this.page.reload()
    }


}