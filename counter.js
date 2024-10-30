
	
	apidata = { key: ipgpvocounter.apikey, ip: ipgpvocounter.ip };
	
	console.log(apidata); 

	jQuery.ajax({
         type: "GET",
         url: "http://www.ipgp.net/api/json/index.php",
         data: apidata,
         cache: false,
         success: function(returned){
         	
         	//console.log('succes');   
         	//console.log(returned); 
         	returned = returned.substring(9);
         	returned = returned.substring(0, returned.length - 2);
         	ipdata = jQuery.parseJSON(returned);
         	//console.log(ipdata.Details.country);
         	
         	
				senddata = { action: 'ipgpvo_counter_ajax', ipdata: ipdata, referer: ipgpvocounter.referer, ip: ipgpvocounter.ip };

				jQuery.ajax({
        		  type: "POST",
         	  url: ipgpvocounter.ajaxurl,
        		  data: senddata,
        		  cache: false,
         	  success: function(returned){
         	
         	//console.log('succes');   
         	//console.log(returned); 
                    
  			
	
                   
     				}
     
  				 });         	
         	
         	
         	
         	
         	
     
	
                   
     		}
     
   });