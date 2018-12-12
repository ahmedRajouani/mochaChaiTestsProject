
"use strict";

var PageBase = require('../page-base');
var config = require('config');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
class SignUpPage extends PageBase {
	constructor ( 
		webdriver,
		driver, 
        targetUrl = config.get('Page.signup.url'),
		titleContents = config.get('Page.signup.title'),
		waitTimeout = 20000
		) {
		super(webdriver, driver, targetUrl,titleContents, waitTimeout);
	}

	async submitForm() {
    await this.SelectElementByXpath(config.get('Selector.signupButtonSelector'), this.waitTimeout);
	}

   async fillOutForm () {
    
    await this.clearAndFillElementById('firstName', config.get('User.firstName'), this.waitTimeout);
    await this.clearAndFillElementById('lastName',config.get('User.lastName'), this.waitTimeout);
    await this.clearAndFillElementById('email',config.get('User.email'), this.waitTimeout);
    await this.SelectElementByXpath(config.get('Selector.signupCountryNumberSelector'), this.waitTimeout);
    await this.SelectElementByXpathAddValue(config.get('Selector.signupPhoneNumberSelector'),config.get('User.phoneNumber'), this.waitTimeout);
    await this.clearAndFillElementById('password',config.get('User.password'), this.waitTimeout);
    await this.clearAndFillElementById('passwordConfirmation',config.get('User.password'), this.waitTimeout);
    await this.SelectElementByXpath(config.get('Selector.signupCheckBoxSelector'), this.waitTimeout);
    
    

    };
    async verifyForm() {
      (await this.getValueForElementById('firstName',this.waitTimeout)).should.be.equal(config.get('User.firstName'));
      (await this.getValueForElementById('lastName',this.waitTimeout)).should.be.equal(config.get('User.lastName'));
      (await this.getValueForElementById('email',this.waitTimeout)).should.be.equal(config.get('User.email'));
      (await this.getValueForElementByXpath(config.get('Selector.signupPhoneNumberSelector'),this.waitTimeout)).should.be.equal(config.get('User.phoneNumber'));
      (await this.getValueForElementById('password',this.waitTimeout)).should.be.equal(config.get('User.password'));
      (await this.getValueForElementById('passwordConfirmation',this.waitTimeout)).should.be.equal(config.get('User.password'));
    
    };
}

module.exports = SignUpPage;