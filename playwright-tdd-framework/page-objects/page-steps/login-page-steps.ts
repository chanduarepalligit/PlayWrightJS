import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.js";
import loginPage from "../page-elements/login-page-elements.json" with {type:'json'}
import config from '../../config/config.json' with {type:'json'}

export class LoginPageSteps{
    page:Page
    common:WebCommons
    constructor(page:Page){
        this.page = page
        this.common = new WebCommons(page)
    }
    async launchTheApplication(){
        await this.common.launchApplication(config.app.url)
    }
    async loginDetails(uName:string,pwd:string){
        console.log(arguments)
        await this.common.fillElement(loginPage.email, uName)
        await this.common.fillElement(loginPage.password, pwd)
    }
    async loginButton(){
        await this.common.clickElement(loginPage.loginButton)
    }
    async forgotPassword(){
        await this.common.isElementVisible(loginPage.forgotPassword)
    }
    async skipButton(){
        await this.common.clickElement(loginPage.skip)
    }
    async verifyLandingPage(){
        await this.common.isElementVisible(loginPage.usersAfterLogin)
    }
}