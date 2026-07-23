import{test, expect, TestInfo} from '@playwright/test'
import { CookiesPageSteps } from '../../page-objects/page-steps/cookies-page-steps.js'
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.js'
import data from '../../testdata/ui/data.json' with {type:'json'}

let cookiesPage : CookiesPageSteps
let loginPage : LoginPageSteps
let testdata : any

test.describe('All UI test cases', ()=>{
    test.beforeEach(async ({page})=>{
        cookiesPage = new CookiesPageSteps(page)
        loginPage = new LoginPageSteps(page)
    });
    test('Verify cookies pop-up', async ()=>{
        await loginPage.launchTheApplication()
        await cookiesPage.verifyCookiesPopUpIsDIsplaying()
    })
    test('Verify cookies content', async ({}, testinfo:TestInfo)=>{
        testdata = data[testinfo.title as keyof typeof data]
        //testdata = data["Verify cookies content" as keyof typeof data]
        await loginPage.launchTheApplication()
        await cookiesPage.verifyCookiesPopUpIsDIsplaying()
        await cookiesPage.verifyCookiesPopUpContent(testdata.content)
    })
    test('Verify logo displayed in pop-up',async ()=>{
        await loginPage.launchTheApplication()
        await cookiesPage.verifyCookiesPopUpIsDIsplaying()
        await cookiesPage.verifyLogo()

    })
    test('Verify cookies pop-up closed after clicking on Allow all', async({}, testinfo:TestInfo)=>{
        testdata = data[testinfo.title as keyof typeof data]
        await loginPage.launchTheApplication()
        await cookiesPage.verifyCookiesPopUpIsDIsplaying()
        await cookiesPage.clickButton(testdata.button)
        await cookiesPage.verifyPopUpDisappeared()
    })
    test ('Login Page with valid credentials', async({},testinfo:TestInfo)=>{
        testdata = data[testinfo.title as keyof typeof data]
        await loginPage.launchTheApplication()
        await cookiesPage.verifyCookiesPopUpIsDIsplaying()
        await cookiesPage.clickButton(testdata.button)
        await cookiesPage.verifyPopUpDisappeared()
        await loginPage.loginDetails(testdata.username,testdata.password)
        await loginPage.loginButton()
        await loginPage.verifyLandingPage()
    })
})