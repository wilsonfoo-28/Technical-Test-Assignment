import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly firstProductAddButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.firstProductAddButton = page.locator('button[data-test^="add-to-cart"]').first(); 
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async verifyPageLoaded() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addFirstProductToCart() {
    await this.firstProductAddButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}