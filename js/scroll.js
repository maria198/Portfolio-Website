$(function(){

	//----offset measures the distance from the top and the left

	var navOffset = $('#section-2').offset();


	$(document).on('scroll',function(){

		var iScrollTop = $(document).scrollTop();

		//----functon makes our nav fixed than we past it
		if( iScrollTop> navOffset.top){
			//-fix the nav position
			$('.nav-top').addClass('fixed');

		}else{
			//--unfix it
			$('.nav-top').removeClass('fixed');

		}

	
	});

});