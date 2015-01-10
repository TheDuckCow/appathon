//clickable menu items
$(document).ready(function() {
	// $(document).on("scroll", onScroll); 

	$(document).ready(function(){
	  $('.img-zoom').hover(function() {
	      $(this).addClass('transition');
	
	  }, function() {
	      $(this).removeClass('transition');
	  });
	});
	
	$(document).on("scroll", fillBar); 
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");        
		$('a').each(function () {
            $(this).removeClass('active');
            })
   		$(this).addClass('active');
		      
        var target = this.hash,	menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		        }, 500, function () {
		        window.location.hash = target;
		            $(document).on("scroll", fillBar);
	        });
	    });
});

// Google Analytics 
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-50073047-1', 'globalappathon.org');
	  ga('send', 'pageview');


	function fillBar(event){
	  	var body = document.body, html = document.documentElement;
	  	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	  	var scrollPos = $(document).scrollTop();
	  	var windowHeight = $( window ).height();
	  	var newHeight = 175+(((scrollPos)/(height - windowHeight))*300)
	  	$("#fillbar").css("height",newHeight);
	  	$("#GAI-logo").css("top", windowHeight-newHeight*3);

	  	$('#nav a').each(function () {
	  		var currLink = $(this);
	  		var refElement = $(currLink.attr("href"));
	  		if(refElement.position().top - $(header).height() <= scrollPos && refElement.position().top + refElement.height() > scrollPos){
	  			$('#nav li a').removeClass("active");
	  			currLink.addClass("active");
	  		}
	  		else{
	  			currLink.removeClass("active");
	  		}
	  	});
	}










