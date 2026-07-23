import{test as base} from '@playwright/test'
import { CookiesPageSteps } from '../page-objects/page-steps/cookies-page-steps.js'
import { LoginPageSteps } from '../page-objects/page-steps/login-page-steps.js'

type myFixtures = {
    cookiesPage : CookiesPageSteps,
    loginPage : LoginPageSteps
}

export const test = base.extend<myFixtures>({
    cookiesPage : async({page}, use)=>{
        await use(new CookiesPageSteps(page))
    },
    loginPage : async({page},use)=>{
        await use(new LoginPageSteps(page))
    }
})
export{expect} from '@playwright/test'