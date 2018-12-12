// Run from command line via
// $ mocha **/signupAndModifyAccount-test.js --timeout 20000

const webdriver = require('selenium-webdriver');
const LoginPage = require('../lib/pages/login-page');
const AccountPage = require('../lib/pages/account-page');
const SignUpPage = require('../lib/pages/signup-page');

// The pref exposes console errors to the tests
const pref = new webdriver.logging.Preferences();
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setLoggingPrefs(pref)
  .build();

describe('sign up and modify account Test', () => {
  process.on('unhandledRejection', (error) => {
    throw (error); // promote promise warning to mocha error
  });

  before(async () => {
    this.signUpPage = new SignUpPage(webdriver, driver);
    this.loginPage = new LoginPage(webdriver, driver);
    this.accountPage = new AccountPage(webdriver, driver);
  
  });

  it('should create user ', async () => {
    this.signUpPage.log('* Create a user Test');
    await this.signUpPage.navigate();
    await this.signUpPage.fillOutForm();
    await this.signUpPage.verifyForm();
    await this.signUpPage.submitForm();
  });
    
  it('should login the user ', async () => {
    this.loginPage.log('* Log the user');
    await this.loginPage.navigate();
    await this.loginPage.fillOutForm();
    await this.loginPage.submitForm();
   
  
  });
    
 it('should modify the account of user ', async () => {
    this.accountPage.log('* Modify the account of user');
    await this.accountPage.waitForTitle();
    await this.accountPage.fillOutForm();
    await this.accountPage.verifyForm();
    await this.accountPage.submitForm();
   
  });
    
  after(async () => driver.quit());
});
