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

