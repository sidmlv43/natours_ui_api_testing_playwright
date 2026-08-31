import { test as base, expect } from "@playwright/test";
import { User } from "./user/user";
import Homepage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import UserProfile from "../pages/userprofile/userprofile";

type BaseFixture = {
  useUser: (user: User) => Promise<void>;
  homepage: Homepage;
  loginPage: LoginPage;
  userProfilePage: UserProfile;
};

export const test = base.extend<BaseFixture>({
  homepage: async ({ page }, use) => {
    const homepage = new Homepage(page);

    await use(homepage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  userProfilePage: async ({ page }, use) => {
    const userprofilePage = new UserProfile(page);
    await use(userprofilePage);
  },

  useUser: async ({ homepage, loginPage }, use) => {
    const useUser = async (user: User) => {
      await homepage.navigate();
      await homepage.gotoLoginPage();
      await loginPage.login(user.email, user.password);
    };

    await use(useUser);
  },
});

export { expect };
