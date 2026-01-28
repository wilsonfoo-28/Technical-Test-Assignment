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
```

## 🚀 Setup Instructions
Please follow these steps to set up the environment on your machine.
1. **Clone the repository:**
git clone [https://github.com/wilsonfoo-28/Technical-Test-Assignment.git]

2. **Install Dependencies:**
npm install

3. **Install Playwright Browsers:**
npx playwright install


## 🏃‍♂️ How to Run the Tests
**1. Run All Tests (UI & API)**
npx playwright test

**2. Run Only Web UI Test**
npx playwright test web-ui-automation

**3. Run Only API Test**
npx playwright test api-automation

**4. View HTML Report**
After execution, run this command to open the detailed test results:
npx playwright show-report

## 📸 Test Results
1. Console Output
Screenshot showing successful execution from the Visual Studio Code command line:

### 2. HTML Test Report
Screenshot showing the passed test scenarios in the HTML report:

*(Note: Please verify the images are located in the `screenshots/` folder)*

---

