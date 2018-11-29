

$(function(){
	$(window).resize(function(){location.reload();});

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

	//menu mobile
	$('#closeMobMenu').on('click', function(){
		$('.menu-mobile').addClass('closed');
	});
	$('.menu-mobile a').on('click', function(){
		$('.menu-mobile').addClass('closed');
	});

	$('#openMobMenu').on('click', function(){
		$('.menu-mobile').removeClass('closed');
	});

	//home animation
	$('.home')
		.animateCss('fadeIn slow')
		.css('opacity','1');

	//Service animation
	$('.service .arrow-container').each(function(i,el){
		$(el).on('click', function(){
			if($(this).hasClass('hide') == false){
				$(this).addClass('hide');
				$(this).prev().slideToggle(300);
			}else{
				$(this).removeClass('hide');
				$(this).prev().slideToggle(300);
			}
			
		});
	});
	
	// Map
	var center = {lat: -45.031449, lng: 168.661904};
 	var map = L.map('map').setView(center, 17);

 	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
});