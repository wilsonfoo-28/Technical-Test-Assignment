import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Web UI Automation Test : saucedemo.com ', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.verifyPageLoaded();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.goToCart();
  await cartPage.verifyItemInCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.fillDetails('Wilson', 'Test', '59200');
  await checkoutPage.finishCheckout();
  await checkoutPage.verifySuccessMessage();

});