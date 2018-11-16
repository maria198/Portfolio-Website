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
		var offset1 = $('.section-2').offset().top - 50;
		var offset2 = $('.section-3').offset().top - 50;
		var offset3 = $('.section-4').offset().top - 50;
		var offset4 = $('.section-5').offset().top - 50;

		let activeLi;

		if (iScrollTop>=offset1 && iScrollTop < offset2){
			activeLi = $('.sidebar-list>li:nth-child(1)');
		}
		if (iScrollTop>=offset2 && iScrollTop < offset3){
			activeLi = $('.sidebar-list>li:nth-child(2)');
		}
		if (iScrollTop>=offset3 && iScrollTop < offset4){
			activeLi = $('.sidebar-list>li:nth-child(3)');
		}
		if (iScrollTop>=offset4){
			activeLi = $('.sidebar-list>li:nth-child(4)');
		}

		activeLi.addClass('active');
		$('.sidebar-list>li').not(activeLi).removeClass('active');
	


	
	});

	///------Navigation between sections
	$('.sidebar-link').on('click', function(e){
		
		e.preventDefault();

			var sTarget = $(this).attr('href');
			var targetOffset = $(sTarget).offset().top;
			$('html, body').animate({scrollTop:targetOffset},1000);

	});

});