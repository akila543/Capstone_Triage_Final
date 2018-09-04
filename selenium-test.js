var webdriver = require('selenium-webdriver');

  var driver = new webdriver.Builder().forBrowser('firefox').build();
 
    driver.get('http://localhost:3000');		//url of your page

    // checking for Traig Dashboard homepage by using Title of page

    /* driver.wait(check_title);
    function check_title(){
    	var promice = driver.getTitle().then (function(title)  {
    		if(title == 'React App'){
    			console.log('success ---');
    			return true;
    		}
    		else{
    			console.log('fail ---');
    		}
    	});
    	return promice;
    }
*/

// checking for Traig Dashboard homepage by using URL of page

	driver.wait(check_homepage);

	function check_homepage()
	{
		var url = driver.getCurrentUrl().then (function(url) {

			if (url == 'http://localhost:3000/#/') 		//url of home page
			{
				console.log('successfully opening Traig Dashboard page');
				return true;
			}
			else
			{
				console.log('fail to open Traig Dashboard page');
				return false;
			}
		});
		return url;
	}

driver.get('http://localhost:3000/#/home').then(function(){
			return driver.findElement( {xpath : '/html/body/div/div/div/header/div/a/button'}).click();
}).then(function(){

			return driver.findElement( {xpath : '/html/body/div/div/div/center/div/div/div/div'}).click();
				}).then (function(){
					return driver.findElement({xpath : '/html/body/div[2]/div[2]/ul/li[3]' }).click();
				}).then(function(){
					return driver.getCurrentUrl();
				}).then( function(url){
					assert.equal("http://localhost:3000/#/loadconf", url);
				}).then( function(){
					console.log('successfully clicking dropdown option');
					return driver.sleep(5000);
			}).then(function(){
					return driver.quit();
});