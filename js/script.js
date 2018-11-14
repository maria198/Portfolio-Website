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
});