
"use strict";

var PageBase = require('../page-base');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var config = require('config');

class AccountPage extends PageBase {
	constructor ( 
		webdriver,
		driver, 
        targetUrl = config.get('Page.account.url'),
		titleContents = config.get('Page.account.title'),
		waitTimeout = 20000
		) {
		
		super(webdriver, driver, targetUrl,titleContents, waitTimeout);
	}


	async submitForm() {
     await this.SelectElementByXpath(config.get('Selector.submitAccountSelector'), this.waitTimeout);
	}

  async fillOutForm () {
    
    await this.SelectElementByXpath(config.get('Selector.languageSelector'), this.waitTimeout);
    await this.clearAndFillElementById('firstName', config.get('User.firstName'), this.waitTimeout);
    await this.clearAndFillElementById('lastName',config.get('User.lastName'), this.waitTimeout);
    await this.clearAndFillElementById('email',config.get('User.email'), this.waitTimeout);
    await this.SelectElementByXpath(config.get('Selector.countryNumberSelector'), this.waitTimeout);
    await this.SelectElementByXpathAddValue(config.get('Selector.phoneNumberSelector'),config.get('User.phoneNumber'), this.waitTimeout);
    await this.SelectElementByXpathAddValue(config.get('Selector.phoneNumberSelector'),config.get('User.phoneNumber'), this.waitTimeout);
    await this.SelectElementByXpath(config.get('Selector.nationalitySelector'), this.waitTimeout);
    await this.SelectElementByXpathAddValue(config.get('Selector.birthDateSelectors.day'),config.get('User.birthDate.day'), this.waitTimeout);
    await this.SelectElementByXpathAddValue(config.get('Selector.birthDateSelectors.mounth'),config.get('User.birthDate.mounth'), this.waitTimeout);
    await this.SelectElementByXpathAddValue(config.get('Selector.birthDateSelectors.year'),config.get('User.birthDate.year'), this.waitTimeout);
    await this.clearAndFillElementById('addressLine1',config.get('User.addressLine1'), this.waitTimeout);
    await this.clearAndFillElementById('addressLine2',config.get('User.addressLine2'), this.waitTimeout);
    await this.clearAndFillElementById('zipCode',config.get('User.zipCode'), this.waitTimeout);
    await this.clearAndFillElementById('city',config.get('User.city'), this.waitTimeout);
    await this.clearAndFillElementById('region',config.get('User.region'), this.waitTimeout);
    await this.SelectElementByXpath(config.get('Selector.addressCountrySelector'), this.waitTimeout);
    await this.clearAndFillElementById('jobTitle',config.get('User.jobTitle'), this.waitTimeout);
    await this.clearAndFillElementById('companyName',config.get('User.companyName'), this.waitTimeout);
  

  };
 async verifyForm() {
 
     
      (await this.getValueForElementById('firstName',this.waitTimeout)).should.be.equal(config.get('User.firstName'));
      (await this.getValueForElementById('lastName',this.waitTimeout)).should.be.equal(config.get('User.lastName'));
      (await this.getValueForElementById('email',this.waitTimeout)).should.be.equal(config.get('User.email'));
      (await this.getValueForElementById('addressLine1',this.waitTimeout)).should.be.equal(config.get('User.addressLine1'));
      (await this.getValueForElementById('addressLine2',this.waitTimeout)).should.be.equal(config.get('User.addressLine2'));
      (await this.getValueForElementById('zipCode',this.waitTimeout)).should.be.equal(config.get('User.zipCode'));
      (await this.getValueForElementById('city',this.waitTimeout)).should.be.equal(config.get('User.city'));
      (await this.getValueForElementById('region',this.waitTimeout)).should.be.equal(config.get('User.region'));
      (await this.getValueForElementById('jobTitle',this.waitTimeout)).should.be.equal(config.get('User.jobTitle'));
      (await this.getValueForElementById('companyName',this.waitTimeout)).should.be.equal(config.get('User.companyName'));
      (await this.getValueForElementByXpath(config.get('Selector.phoneNumberSelector'),this.waitTimeout)).should.be.equal(config.get('User.phoneNumber'));
      (await this.getValueForElementByXpath(config.get('Selector.birthDateSelectors.day'),this.waitTimeout)).should.be.equal(config.get('User.birthDate.day'));
      (await this.getValueForElementByXpath(config.get('Selector.birthDateSelectors.mounth'),this.waitTimeout)).should.be.equal(config.get('User.birthDate.mounth'));
      (await this.getValueForElementByXpath(config.get('Selector.birthDateSelectors.year'),this.waitTimeout)).should.be.equal(config.get('User.birthDate.year'));
      (await this.verifySelectedByClassNameList(config.get('Selector.countrySelectSelector'),this.waitTimeout)).should.be.equal(config.get('User.country'));
      (await this.verifySelectedByIdList('addressCountry',this.waitTimeout)).should.be.equal(config.get('User.country'));
      (await this.verifySelectedByNameList('nationality',this.waitTimeout)).should.be.equal(config.get('User.country'));
     
     
  };
}

module.exports = AccountPage;