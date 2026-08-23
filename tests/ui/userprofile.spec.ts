import { test, expect } from "@playwright/test";
import Homepage from "../../pages/homepage";
import path from "path";

test("user can login and check profile", async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  const loginPage = await homepage.gotoLoginPage();
  await loginPage.login("admin@natours.io", "test1234");
  const userProfilePage = await homepage.navigateToUserProfile();

  userProfilePage.updateName("Siddharth Malviya");
  await page.pause();
});

test("update user profile display picture", async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  const loginPage = await homepage.gotoLoginPage();
  await loginPage.login("admin@natours.io", "test1234");
  const userProfilePage = await homepage.navigateToUserProfile();

  const imagePath = path.join(process.cwd(), "data", "pics", "Sid.jpg");

  await userProfilePage.updateDisplayPicture(imagePath);
  // userProfilePage.updateDisplayPicture(
  //   "/Users/siddharth.malviya/Learnings/playwright/natours-playwright-framework/data/pics/Sid.jpg",
  // );
});
