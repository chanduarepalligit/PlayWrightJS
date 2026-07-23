import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.js";
import cookiesPage from "../page-elements/cookie-page-elements.json" with {type:'json'}

export class CookiesPageSteps{
    page : Page
    common : WebCommons
    constructor(page : Page){
        this.page = page
        this.common = new WebCommons(page)
    }
    async verifyCookiesPopUpIsDIsplaying(){
        await this.common.isElementVisible(cookiesPage.cookiesHeader)

    }
    async verifyCookiesPopUpContent(expContent:string){
        await this.common.isElementVisible(cookiesPage.cookiesContent)
        const actualContent = await this.common.getElementText(cookiesPage.cookiesContent)
        await this.common.compareText(actualContent, expContent)
    }
    async verifyLogo(){
        await this.common.isElementVisible(cookiesPage.creatioLogo)
    }
    async verifySwitchButtons(){
        await this.common.isElementVisible(cookiesPage.necessarySwitchButton)
        await this.common.isElementVisible(cookiesPage.preferencesSwitchButton)
    }
    async verifySelectionButtons(){
        await this.common.isElementVisible(cookiesPage.denyButton)
        await this.common.isElementVisible(cookiesPage.acceptAll)
    }
    async verifyShowDetails(){
        await this.common.isElementVisible(cookiesPage.showDetails)
    }
    async clickButton(button:string){
        switch(button.toLowerCase()){
            case 'allow all':
                await this.common.clickElement(cookiesPage.acceptAll)
                break;
            case 'deny':
                await this.common.clickElement(cookiesPage.denyButton)
                break;
            default:
                throw new Error (`Invalid button option`)
        }
        
    }
    async verifyPopUpDisappeared(){
        await this.common.isElementDisabled(cookiesPage.cookiesHeader)
    }

}