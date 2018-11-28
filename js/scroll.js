$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});


$(function(){
	
	//----offset measures the distance from the top and the left

	var navOffset = $('#section-2').offset();
	var homeOffset = $('#section-2').offset();


	$(document).on('scroll',function(){

		var iScrollTop = $(document).scrollTop();

		//----functon makes our nav fixed than we past it
		if( iScrollTop> (navOffset.top - 100)){
			//-fix the nav position
			$('.nav-top').addClass('fixed');

		}else{
			//--unfix it
			$('.nav-top').removeClass('fixed');

		}

		if( iScrollTop>navOffset.top - 150){
			$('.sidebar').addClass('show');
		}else{
			//--unfix it
			$('.sidebar').removeClass('show');

		}



		if( iScrollTop> (homeOffset.top - (homeOffset.top*0.9))){
			//-fix the nav position
			$('.home').addClass('fixed');

		}else{
			//--unfix it
			$('.home').removeClass('fixed');

		}

		//-----higlights the right section in the nav while scrolling
		let activeLi;
		$('.sidebar-list>li').each(function(){
			let Target = $(this).find('.sidebar-link').attr('href');
			let sectionOffset = $(Target).offset().top - 200;
			if(iScrollTop >= sectionOffset){
				activeLi = $(this);
				activeLi.addClass('active');
			}		
		});
		$('.sidebar-list>li').not(activeLi).removeClass('active');

		// gradient transition
		let activeGradient;

		$('.section').each(function(){
			let sectionOffset = $(this).offset().top - 300;
			if(iScrollTop >= sectionOffset){
				activeGradient = $(this).find('.section-background');
				activeGradient.addClass('show');
			}
			
		});
		$('section .section-background').not(activeGradient).removeClass('show');


	});

	///------Navigation between sections
	$('.sidebar-link').on('click', function(e){
		
		e.preventDefault();

			var sTarget = $(this).attr('href');
			var targetOffset = $(sTarget).offset().top;
			$('html, body').animate({scrollTop:targetOffset},1000);

	});
	$('#btn-s1-down').on('click', function(e){
		
		e.preventDefault();

			var sTarget = $(this).data('target');
			var targetOffset = $(sTarget).offset().top;
			$('html, body').animate({scrollTop:targetOffset},1000);

	});

	var mq = window.matchMedia( "(min-width: 900px)" );

		// ScrollReveal should proceed if we’re not mobile,
		// or if we’re mobile with a matching minimum width. 
	if (mq.matches) {
		var oServices = anime({
							  targets: '.service',
							  opacity: {
							  		value:[0,1],
							  		delay: function(el,i,l){
										return 500*i;
									}
							  },
							  translateY: {
							  		value: ['300px',0],
							  		delay: function(el,i,l){
										return 500*i;
									}
							  },
							  easing: 'easeInOutQuad',
							  autoplay: false			  
							});

		var oWorks = anime({
							  targets: '.work',
							  opacity: [0,1],
							  scale: [
							  	{value: 0},
							  	{value: 2},
							  	{value: 1}

							  ],
							  easing: 'easeInOutQuad',
							  delay: function(el,i,l){
										return 500*i;
									},
							  autoplay: false			  
							});
		

	  	
	  	$('.section-title').addClass('v').css('opacity','0');
	  	$('.service').addClass('v').css('opacity','0');
	  	//animate section-header on scroll
	  	$(document).on('scroll',function(){
	  		var iScrollTop = $(document).scrollTop();
	  		var iServiceOffset = $('#section-2').offset().top - 500;
			if(iScrollTop > iServiceOffset){
				oServices.play();
			}
			var iWorkOffset = $('#section-3').offset().top - 500;
			if(iScrollTop > iWorkOffset){
				oWorks.play();
			}
			

		  	$('.section-title').each(function(i,el){
				var iHeadeingOffset = $(el).offset().top;
				if( iScrollTop >= (iHeadeingOffset-600)){


					//-----prevents adding of class every time than we scroll
					if($(el).hasClass('v') == true){
						
						if($(el).hasClass('title-center') == true){
							var cssProperties = anime({
								  targets: el,
								  opacity: [0,1],
								  top: ['300px',0],
								  easing: 'easeInOutQuad'
								});

						}else{
							var cssProperties = anime({
								  targets: el,
								  opacity: [0,1],
								  left: ['500px',0],
								  easing: 'easeInOutQuad'
								});
						}
							
						$(el).removeClass('v');
					}

				}
			});

			// $('.service').each(function(i,el){
			// 	var iServiceOffset = $('#section-2').offset().top;
			// 	if( iScrollTop >= (iServiceOffset-500)){

			// 		//-----prevents adding of class every time than we scroll
			// 		if($(el).hasClass('v') == true){
						
							
			// 			$(el).removeClass('v');
			// 		}

			// 	}
			// });
	  	});
	}

});