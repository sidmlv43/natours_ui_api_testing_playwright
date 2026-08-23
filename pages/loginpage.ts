import { Locator, Page } from "@playwright/test";
import Homepage from "./homepage";

export default class LoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.emailInput = this.page.getByLabel("Email address");
    this.passwordInput = this.page.getByLabel("Password");
    this.loginButton = this.page.getByRole("button", { name: "Login" });
  }

  async navigate() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    await this.page.waitForURL((url) => url.pathname === "/", {
      timeout: 5000,
    });
    return new Homepage(this.page);
  }
}
