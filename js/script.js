

$(function(){

	// $('html, body').animate({ scrollTop: 0 }, 100);
	// $(window).resize(function(){location.reload();});

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
	

	var map;
		
	

	$('#exampleModal').on('shown.bs.modal', function () {
	 	if(!map){

	 		var center = {lat:-36.847178, lng: 174.763786}; 
		 	map = L.map('map').setView(center, 14);

		 	L.tileLayer('https://api.mapbox.com/styles/v1/mary-trepakova/cjotjoufl1abd2rpj2st4259i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyeS10cmVwYWtvdmEiLCJhIjoiY2pra2V6cHRzMDEzbDNqczc5NjF0aWptbiJ9.f52j7_rFo6_WhBh3aD3QKw').addTo(map);
		 	var userIcon = L.icon({
		 		iconUrl: '../assets/icons/icon-me_1.svg',
		 		iconSize: [60,60]
		 	});
		 	var userMarker = L.marker(center,{icon: userIcon}).addTo(map);
 			userMarker.bindPopup('<div class="user-popup">Kia ora</div>');
	 	}
	})

});