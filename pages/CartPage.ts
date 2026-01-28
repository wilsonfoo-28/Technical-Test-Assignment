import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async verifyItemInCart() {
    await expect(this.cartItem).toBeVisible(); 
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}