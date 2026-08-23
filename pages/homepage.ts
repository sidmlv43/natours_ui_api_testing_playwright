import { Locator, Page } from "@playwright/test";
import LoginPage from "./loginpage";
import UserProfile from "./userprofile/userprofile";

export default class Homepage {
  private brandIcon: Locator;
  private footer: Locator;
  private footerLogo: Locator;
  private copyRight: Locator;
  private footerNav: Locator;
  private aboutUsLink: Locator;
  private downloadAppLink: Locator;
  private becomeGuideLink: Locator;
  private careersLink: Locator;
  private contactLink: Locator;
  private loginLink: Locator;
  private signupLink: Locator;
  private logoutLink: Locator;
  private userProfileLink: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.brandIcon = this.page.getByAltText(".Natours logo");
    this.footer = this.page.locator("footer");
    this.footerNav = this.page.locator(".footer__nav");
    this.footerLogo = this.page.locator(".footer__logo");
    this.copyRight = this.page.locator(".footer__copyright");
    this.aboutUsLink = this.page.getByRole("link", { name: "About us" });
    this.downloadAppLink = this.page.getByRole("link", {
      name: "Download apps",
    });
    this.becomeGuideLink = this.page.getByRole("link", {
      name: "Become a guide",
    });
    this.careersLink = this.page.getByRole("link", { name: "Careers" });
    this.contactLink = this.page.getByRole("link", { name: "Contact" });
    this.loginLink = this.page.getByRole("link", { name: "Log in" });
    this.signupLink = this.page.getByRole("link", { name: "Sign up" });
    this.logoutLink = this.page.getByRole("link", { name: "Log out" });
    this.userProfileLink = this.page.locator("[href='/me']");
  }

  async navigate() {
    await this.page.goto("/");
  }

  getBrandIcon() {
    return this.brandIcon;
  }

  getFooter() {
    return this.footer;
  }

  getFooterLogo() {
    return this.footerLogo;
  }

  getCopyRight() {
    return this.copyRight;
  }

  getFooterNav() {
    return this.footerNav;
  }

  getAboutUsLink() {
    return this.aboutUsLink;
  }

  getDownloadAppLink() {
    return this.downloadAppLink;
  }

  getBecomeGuideLink() {
    return this.becomeGuideLink;
  }

  getCareersLink() {
    return this.careersLink;
  }

  getContactLink() {
    return this.contactLink;
  }

  getLoginLink() {
    return this.loginLink;
  }

  getSignupLink() {
    return this.signupLink;
  }

  /** Navigates to the login page  */
  async gotoLoginPage() {
    await this.loginLink.click();
    return new LoginPage(this.page);
  }

  /** Navigates to the signup page  */
  async gotoSignupPage() {
    await this.signupLink.click();
  }

  /** Navigates to the user profile page  */
  async gotoUserProfilePage() {
    await this.userProfileLink.click();
  }

  /** Logs out the user  */
  async logout() {
    await this.logoutLink.click();
  }

  /** Navigates to the user profile page and returns the UserProfile instance */
  async navigateToUserProfile() {
    await this.userProfileLink.click();
    return new UserProfile(this.page);
  }
}
