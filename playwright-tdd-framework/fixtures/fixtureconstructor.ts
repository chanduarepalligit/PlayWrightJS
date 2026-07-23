import { Page } from '@playwright/test';
import { CookiesPageSteps } from '../page-objects/page-steps/cookies-page-steps.js';
import { LoginPageSteps } from '../page-objects/page-steps/login-page-steps.js';

export class Pages {

    cookiesPage: CookiesPageSteps;
    loginPage: LoginPageSteps;

    constructor(page: Page) {
        this.cookiesPage = new CookiesPageSteps(page);
        this.loginPage = new LoginPageSteps(page);
    }
}