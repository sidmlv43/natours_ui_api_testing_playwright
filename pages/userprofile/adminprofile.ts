import { Locator } from "playwright";
import UserProfile from "./userprofile";

export default class AdminProfile extends UserProfile {
  private adminSettingsSection: Locator;

  constructor(page: any) {
    super(page);
    this.adminSettingsSection = page
      .locator(".user-view__form-container")
      .filter({
        hasText: "Admin settings",
      });
  }

  updateAdminSettings(setting: string) {
    // Logic to update admin settings
  }
}
