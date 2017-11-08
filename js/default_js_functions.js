/*global $*/
		$(document).ready(function () {
		    
	      var trigger = $('.hamburger'),
	      overlay = $('.overlay'),
	      isClosed = false;
	
	      trigger.click(function () {
	        hamburger_cross();
	      });
	      
	    $("#OL").click(function(){
	      $('.hamburger').click();
        });
	    
	    //sidebar buttons
	    $(".Sub_button").click(function(){
	      $('.hamburger').click();
        });
        
	    $("#Home_button").click(function(){
	      loadDoc('HomeContents.html', replace);
	      $('.hamburger').click();
        });
	      
	    $("#About_button").click(function(){
	      loadDoc('About.html', replace);
	      $('.hamburger').click();
        });
        
        $("#Resume_button").click(function(){
	      loadDoc('Resume.html', replace);
	      $('.hamburger').click();
        });
		
		$("#Booking_button").click(function(){
	      loadDoc('Contact.html', replace);
	      $('.hamburger').click();
        });
        
        $("#Art_button").click(function(){
	      loadDoc('Art.html', replace);
	      $('.hamburger').click();
        });
        $("#Contact_button").click(function(){
	      loadDoc('Contact.html', replace);
	      $('.hamburger').click();
        });
		$("#Claytonotron_button").click(function(){
	      loadDoc('Claytonotron.html', replace);
	      $('.hamburger').click();
        });
        
	    
	    function loadDoc(url, cFunction) {
	        var xhttp;
	        xhttp=new XMLHttpRequest();
	        xhttp.onreadystatechange = function() {
	            if (this.readyState == 4 && this.status==200) {
	                cFunction(this);
	            }
	        };
	        
	        xhttp.open("POST",url,true);
	        xhttp.send();
	    }
	    
	    function replace(xhttp) {
	        document.getElementById("main_page_content").innerHTML = xhttp.responseText;
	        //=====re-initialize gallery functions
	  
        	    $(".filter-button").click(function(){
                    var value = $(this).attr('data-filter');
                    
                    if(value == "all")
                    {
                        //$('.filter').removeClass('hidden');
                        $('.filter').show('1000');
                    }
                    else
                    {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                        $(".filter").not('.'+value).hide('3000');
                        $('.filter').filter('.'+value).show('3000');
                        
                    }
                });
            
            if ($(".filter-button").removeClass("active")) {
                $(this).removeClass("active");
            }
            $(this).addClass("active");
	    }
	    
	    
	   // default page to start on
	    window.onload = function() {
          loadDoc('About.html', replace);
        };
	    
	    function hamburger_cross() {
	      if (isClosed == true) {          
	        overlay.hide();
	        trigger.removeClass('is-open');
	        trigger.addClass('is-closed');
	        isClosed = false;
	      } else {   
	        overlay.show();
	        trigger.removeClass('is-closed');
	        trigger.addClass('is-open');
	        isClosed = true;
	      }
	  }
	  
	  $('[data-toggle="offcanvas"]').click(function () {
	        $('#wrapper').toggleClass('toggled');
	  });
	  
	  //=====gallery functions
	  
	    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
	  
	});