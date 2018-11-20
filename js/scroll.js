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

});