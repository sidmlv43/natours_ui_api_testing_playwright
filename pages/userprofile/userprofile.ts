import { Locator } from "playwright";

export default class UserProfile {
  private accountSettingsSection: Locator;
  private passwordChangeSection: Locator;
  private menuSection: Locator;
  private myBookingsLink: Locator;
  private myReviewsLink: Locator;
  private billingLink: Locator;
  private nameInputField: Locator;
  private emailInputField: Locator;
  private currentPasswordInputField: Locator;
  private newPasswordInputField: Locator;
  private confirmNewPasswordInputField: Locator;
  private saveSettingsButton: Locator;
  private savePasswordButton: Locator;
  private userDisplayPictureUpdateInputField: Locator;

  constructor(private page: any) {
    this.accountSettingsSection = this.page
      .locator(".user-view__form-container")
      .filter({
        hasText: "Your account settings",
      });

    this.passwordChangeSection = this.page
      .locator(".user-view__form-container")
      .filter({
        hasText: "Password change",
      });

    this.menuSection = this.page.locator(".user-view__menu");
    this.myBookingsLink = this.menuSection.getByRole("link", {
      name: "My bookings",
    });
    this.myReviewsLink = this.menuSection.getByRole("link", {
      name: "My reviews",
    });
    this.billingLink = this.menuSection.getByRole("link", {
      name: "Billing",
    });

    this.nameInputField = this.page.getByLabel("Name");
    this.emailInputField = this.page.getByLabel("Email address");
    this.currentPasswordInputField = this.page.getByLabel("Current password");
    this.newPasswordInputField = this.page.getByLabel("New password");
    this.confirmNewPasswordInputField = this.page.getByLabel(
      "Confirm new password",
    );

    this.saveSettingsButton = this.accountSettingsSection.getByRole("button", {
      name: "Save settings",
    });
    this.savePasswordButton = this.passwordChangeSection.getByRole("button", {
      name: "Save password",
    });

    this.userDisplayPictureUpdateInputField = this.page.getByRole("button", {
      name: "Choose new photo",
    });
  }

  getNameInputField() {
    return this.nameInputField;
  }

  getEmailInputField() {
    return this.emailInputField;
  }

  async updateName(name: string) {
    await this.nameInputField.fill(name);
    await this.saveSettingsButton.click();
  }

  async updateEmail(email: string) {
    await this.emailInputField.fill(email);
    await this.saveSettingsButton.click();
  }

  async updateNameAndEmail(name: string, email: string) {
    await this.nameInputField.fill(name);
    await this.emailInputField.fill(email);
    await this.saveSettingsButton.click();
  }

  async updatePassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
  ) {
    await this.currentPasswordInputField.fill(currentPassword);
    await this.newPasswordInputField.fill(newPassword);
    await this.confirmNewPasswordInputField.fill(confirmNewPassword);
    await this.savePasswordButton.click();
  }

  async updateDisplayPicture(filePath: string) {
    await this.userDisplayPictureUpdateInputField.setInputFiles(filePath);
    await this.saveSettingsButton.click();
  }
}
