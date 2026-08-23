import { test as base, expect } from "@playwright/test";
import { User } from "./user/user";
import Homepage from "../pages/homepage";

type MyFixture = {
  useUser: (user: User) => Promise<void>;
};

export const test = base.extend<MyFixture>({
  useUser: async ({ page }, use) => {
    const loginAs = async (user: User) => {
      const homepage = new Homepage(page);
      homepage.navigate();
      const loginpage = await homepage.gotoLoginPage();
      loginpage.login(user.email, user.password);
    };
    await use(loginAs);
  },
});

export { expect };
