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


		if( iScrollTop> (homeOffset.top - (homeOffset.top*0.9))){
			//-fix the nav position
			$('.home').addClass('fixed');

		}else{
			//--unfix it
			$('.home').removeClass('fixed');

		}
	
	});

});