Testing Wunderflats pages using Selenium Webdriver with Page Object Model Design using Javascript,Mocha and Chai
By Ahmed Rajouani Alaoui

1.  Demonstrates a way of organizing Selenium Javascript Tests Using the Page Object Model 

2.  The primary advantage to using Page Objects is that when a component changes in the underlying application, it only needs to be changed in the Page object instead of each test.

  In order to run the tests :
  
3.  Open the Command Prompt and go to the project folder    

4.  $ npm install

5.  $ npm run test

if you have the error :"The ChromeDriver could not be found on the current PATH" you will need to download the ChromeDriver and put it into your path.

check this link (https://stackoverflow.com/questions/26191142/selenium-nodejs-chromedriver-path)

6.  Page Model Heirachy - starting from bottom

	a.  component-base.js - base for components and pages

	b.  page-base - base for internal pages 
			extends component-base.js


	c.	pages folder - account-page.js,login-page.js,signup-page.js

	d.  test folder - signupAndModifyAccount-test.js
        Require Selenium webdirver, mocha,config and several pages to accomplish testing
    
    e.  config - default.json contains all data that can be changed without changing the source code
    
    
	

	


