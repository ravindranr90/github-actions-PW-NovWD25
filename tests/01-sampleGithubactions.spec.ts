import { test } from "@playwright/test";

test(`Learn github actions`, async ({ page }) => {


    await page.goto(`http://leaftaps.com/opentaps/control/login`);

    await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

})