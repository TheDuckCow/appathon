<!-- JQUERY FOR SLIDING NAVIGATION --->   
		$(document).ready(function() {
		  $('a[href*=#]').each(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		    && location.hostname == this.hostname
		    && this.hash.replace(/#/,'') ) {
		      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		       if ($target) {
		         var targetOffset = $target.offset().top;

<!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV--->   
		         $(this).click(function() {
		            $("#nav li a").removeClass("active");
		            $(this).addClass('active');
		           $('html, body').animate({scrollTop: targetOffset}, 400);
		           return false;
		         });
		      }
		    }
		  });
		});


<!-- Google Analytics -->
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-50073047-1', 'globalappathon.org');
	  ga('send', 'pageview');
