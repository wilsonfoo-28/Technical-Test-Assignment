# Technical Test Assignment

**Framework:** TypeScript + Playwright

This repository contains the automated testing solution for the technical assessment. It includes **Web UI Automation** (www.saucedemo.com) and **API Automation** (JSONPlaceholder).

---

## Project Structure

```text
├── pages/                  
│   ├── LoginPage.ts        # Login Page
│   ├── InventoryPage.ts    # Products Page
│   ├── CartPage.ts         # Cart validation
│   └── CheckoutPage.ts     # Checkout Page
├── tests/                  # Test Specifications
│   ├── web-ui-automation.spec.ts  # WebUI Automation Test
│   └── api-automation.spec.ts     # JSONPlaceholder API CRUD Test
├── screenshots/            # Results
├── playwright.config.ts    # PlayWright Configuration
└── README.md               # Documentation