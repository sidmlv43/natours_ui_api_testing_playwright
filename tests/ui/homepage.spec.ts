import { test, expect } from "../../fixtures/base.fixture";
import Homepage from "../../pages/homepage";

test("has title", async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  await expect(page).toHaveTitle(/Natours/);
});

test("goto login page", async ({ page }) => {
  const homepage = new Homepage(page);
  homepage.navigate();
  const loginPage = await homepage.gotoLoginPage();
  await expect(page).toHaveURL(/login/);

  await loginPage.login("admin@natours.io", "test1234");
});
