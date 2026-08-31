import { test, expect } from "../../fixtures/base.fixture";
import { USERS } from "../../fixtures/user/Users";
import Homepage from "../../pages/homepage";
import path from "path";

test("user can login and check profile", async ({
  page,
  useUser,
  homepage,
}) => {
  await useUser(USERS.user);
  const userProfilePage = await homepage.navigateToUserProfile();
  userProfilePage.updateName("Sophie Del Rey");
  const updatedUserName = await userProfilePage
    .getNameInputField()
    .inputValue();

  const responsePromise = page.waitForResponse(
    (response) =>
      response.url().includes("updateMe") && response.status() === 200,
  );

  console.log("res => " + (await (await responsePromise).body()));

  await userProfilePage.updateName("Siddharth Malviya");

  await responsePromise;
  console.log("updatedUserName: ", updatedUserName);

  expect(updatedUserName.includes("Siddharth")).toBeTruthy();
});

test("update user profile display picture", async ({
  homepage,
  loginPage,
  userProfilePage,
}) => {
  await homepage.navigate();
  await loginPage.login("admin@natours.io", "test1234");
  await homepage.navigateToUserProfile();

  const imagePath = path.join(process.cwd(), "data", "pics", "Sid.jpg");

  await userProfilePage.updateDisplayPicture(imagePath);
});
