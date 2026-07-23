import { Pages } from "../../fixtures/fixtureconstructor.js";
import{test} from '@playwright/test'
import data from "../../testdata/ui/data.json" with {type:'json'}

let testdata : any
test ('Login Page', async({page}) =>{
    const pages = new Pages(page)
    testdata = data['Login Page New' as keyof typeof data]
    await pages.loginPage.launchTheApplication()
    await pages.cookiesPage.verifyCookiesPopUpIsDIsplaying()
    await pages.cookiesPage.clickButton(testdata.button)
    await pages.loginPage.loginDetails(testdata.username,testdata.password)
    await pages.loginPage.loginButton()
    await pages.loginPage.verifyLandingPage()

})