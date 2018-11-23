$(function(){

	// input, textarea label animation
	$('.container-input > input, textarea').on('click',function(){
		$(this).prev().addClass('focus');
		$(this).next().addClass('focus');
	});
	$('.container-input > input, textarea').on('blur',function(){
		if( $(this).val() == '')
		{
			$(this).prev().removeClass('focus');
			$(this).next().removeClass('focus');
		}
	});

	$('#closeMobMenu').on('click', function(){
		$('.menu-mobile').addClass('closed');
	});
	$('.menu-mobile a').on('click', function(){
		$('.menu-mobile').addClass('closed');
	});

	$('#openMobMenu').on('click', function(){
		$('.menu-mobile').removeClass('closed');
	});


});