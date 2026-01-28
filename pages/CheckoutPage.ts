import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async fillDetails(fName: string, lName: string, zip: string) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.postalCode.fill(zip);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}