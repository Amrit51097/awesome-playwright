import {test as baseTest} from '@playwright/test';
import loginPage from '../pageMethod/login-page';

const test = baseTest.extend({

    login: async({page, isMobile}, use) =>
    {
        const login = new loginPage(page, isMobile)
        await use(login)
    }
})
export default test;