import{test} from '../../fixtures/fixtures.js'
import {TestInfo} from '@playwright/test'
import data from '../../testdata/ui/data.json' with {type:'json'}

let testdata : any

test('Login Page New', async ({loginPage, cookiesPage}, testinfo:TestInfo)=>{
    testdata = data[testinfo.title as keyof typeof data]
    await loginPage.launchTheApplication()
    await cookiesPage.verifyCookiesPopUpIsDIsplaying()
    await cookiesPage.clickButton(testdata.button)
    await cookiesPage.verifyPopUpDisappeared()
    await loginPage.loginDetails(testdata.username,testdata.password)
    await loginPage.loginButton()
    await loginPage.verifyLandingPage()
})