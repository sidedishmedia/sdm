$(function() {


	var owl = $('.owl-carousel-testimonials');
    owl.owlCarousel({
    	dots: false,
		nav: false,
	    responsive:{
	        0:{
	            stagePadding: 0,
			    loop:true,
			    margin:20,
			    nav:false,
			    items:1,
			    lazyLoad: true,
			    dots: false,
			    nav: false,
			    autoHeight:true
	        },
	        768:{
	            stagePadding: 0,
			    loop:true,
			    margin:20,
			    nav:false,
			    items:1,
			    lazyLoad: true,
			    dots: false,
			    nav: false,
	        },
	        1200:{
	            stagePadding: 200,
			    loop:true,
			    margin:0,
			    nav:false,
			    items:1,
			    lazyLoad: true,
			    dots: false,
			    nav: false,
	    	}
    	}
	})

	$('.am-nav-holder').on('click','.am-prev',function(){
		console.log('click');
		owl.trigger('prev.owl.carousel', [800]);
	})
	$('.am-nav-holder').on('click','.am-next',function(){
		console.log('click');
		owl.trigger('next.owl.carousel', [800]);
	})



	$(function() {
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .not('.popup-with-form')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
	});



	$('body').on('click', '.open-modal', function(event){
		event.preventDefault();
		$('.modal-form').show('fast');
		$('.modal-form').css('display', 'flex');
	})
	$('body').on('click', '.modal-overlay', function(){
		event.preventDefault();
		$('.modal-form').hide('fast');
	})




	$('body').on('click', '.mobile-nav-trigger.disactive', function(event){
		event.preventDefault();
		$(this).removeClass('disactive');
		$(this).addClass('active');
		$('.nav-holder').show('fast');
		$('.nav-holder').addClass('mobile');
	})
	$('body').on('click', '.mobile-nav-trigger.active', function(event){
		event.preventDefault();
		$(this).removeClass('active');
		$(this).addClass('disactive');
		$('.nav-holder').hide('fast');
	})
	$('body').on('click', '.nav-holder.mobile', function(event){
		event.preventDefault();
		$('.nav-holder').hide('fast');
		$(this).removeClass('active');
		$(this).addClass('disactive');
		$('.mobile-nav-trigger').removeClass('active');
		$('.mobile-nav-trigger').addClass('disactive');
	})



		
});
