
"use strict";
var PageBase = require('../page-base');

var config = require('config');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
class LoginPage extends PageBase {
	constructor ( 
		webdriver,
		driver, 
		targetUrl = config.get('Page.login.url'),
		titleContents = config.get('Page.login.title'),
		waitTimeout = 10000
		) {
		super(webdriver, driver, targetUrl,titleContents, waitTimeout);
	}

     async submitForm() {
       await this.SelectElementByXpath(config.get('Selector.loginButtonSelector'), this.waitTimeout);
	 }
    
	async fillOutForm () {
        await this.clearAndFillElementById('email', config.get('User.email'), this.waitTimeout);
        await this.clearAndFillElementById('password',config.get('User.password'), this.waitTimeout);
       
		};
	
    async verifyForm() {
      (await this.getValueForElementById('email',this.waitTimeout)).should.be.equal(config.get('User.email'));
      (await this.getValueForElementById('password',this.waitTimeout)).should.be.equal(config.get('User.password'));
     
  };
	

}

module.exports = LoginPage;