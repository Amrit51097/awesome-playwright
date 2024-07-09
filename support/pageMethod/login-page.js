import { expect, page, locator } from "@playwright/test";

class loginPage
{
    constructor(page, isMobile)
    {
        this.page = page;
        this.isMobile = isMobile;
    }

    /**
     * navigate to landing page
     */
    async navigate_to_landing_page()
    {
        await this.page.goto('/' + 'web/index.php/auth/login');
        await this.page.waitForURL('web/index.php/auth/login');
    }
}
export default loginPage;