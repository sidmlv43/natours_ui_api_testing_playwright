import { test, expect } from "../../fixtures/base.fixture";
import { USERS } from "../../fixtures/user/Users";
import Homepage from "../../pages/homepage";
import path from "path";

test("user can login and check profile", async ({ page, useUser }) => {
  const homepage = new Homepage(page);
  await useUser(USERS.user);
  const userProfilePage = await homepage.navigateToUserProfile();

  userProfilePage.updateName("Siddharth Malviya");
  const updatedUserName = await userProfilePage
    .getNameInputField()
    .inputValue();

  console.log("updatedUserName: ", updatedUserName);

  expect(updatedUserName).toEqual("Siddharth Malviya");
});

test("update user profile display picture", async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  const loginPage = await homepage.gotoLoginPage();
  await loginPage.login("admin@natours.io", "test1234");
  const userProfilePage = await homepage.navigateToUserProfile();

  const imagePath = path.join(process.cwd(), "data", "pics", "Sid.jpg");

  await userProfilePage.updateDisplayPicture(imagePath);
});
