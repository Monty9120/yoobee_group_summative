$(function(){

	// button animation

	// FOOD
	// -------------------------------------------
	var oCafeAnime= anime({
		targets:'.cafe_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:900,
		autoplay:true,
	
	});

	var oBarAnime= anime({
		targets:'.bar_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1100,
		autoplay:true,
		
	});

	var oRestaurantAnime= anime({
		targets:'.restaurant_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1300,
		autoplay:true,
		
	});

	var oFoodAllAnime= anime({
		targets:'.food_all_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,
		complete:function(){
			$('.food_all_circle').css('animation','draw 2s linear');
			$('.inner_food_all_circle').css('animation','reverse_draw 2s linear');
			$('.food_all_circle').css('stroke','#79E8CC');
			$('.inner_food_all_circle').css('stroke','#79E8CC');

			$('.restaurant_circle').css('animation','draw 2s linear');
			$('.inner_restaurant_circle').css('animation','reverse_draw 2s linear');
			$('.restaurant_circle').css('stroke','#79E8CC');
			$('.inner_restaurant_circle').css('stroke','#79E8CC');

			$('.bar_circle').css('animation','draw 2s linear');
			$('.inner_bar_circle').css('animation','reverse_draw 2s linear');
			$('.bar_circle').css('stroke','#79E8CC');
			$('.inner_bar_circle').css('stroke','#79E8CC');

			$('.cafe_circle').css('animation','draw 2s linear');
			$('.inner_cafe_circle').css('animation','reverse_draw 2s linear');
			$('.cafe_circle').css('stroke','#79E8CC');
			$('.inner_cafe_circle').css('stroke','#79E8CC');
		}
	});

	// ACCOMMODATION
	// -------------------------------------------

	var oHotelAnime= anime({
		targets:'.hotel_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:900,
		autoplay:true,
	
	});

	var oMotelAnime= anime({
		targets:'.motel_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1100,
		autoplay:true,
		
	});

	var oBackpackAnime= anime({
		targets:'.backpack_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1300,
		autoplay:true,
		
	});

	var oAccomAllAnime= anime({
		targets:'.accom_all_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,
		complete:function(){
			$('.accom_all_circle').css('animation','draw 2s linear');
			$('.inner_accom_all_circle').css('animation','reverse_draw 2s linear');
			$('.accom_all_circle').css('stroke','#79E8CC');
			$('.inner_accom_all_circle').css('stroke','#79E8CC');

			$('.hotel_circle').css('animation','draw 2s linear');
			$('.inner_hotel_circle').css('animation','reverse_draw 2s linear');
			$('.hotel_circle').css('stroke','#79E8CC');
			$('.inner_hotel_circle').css('stroke','#79E8CC');

			$('.motel_circle').css('animation','draw 2s linear');
			$('.inner_motel_circle').css('animation','reverse_draw 2s linear');
			$('.motel_circle').css('stroke','#79E8CC');
			$('.inner_motel_circle').css('stroke','#79E8CC');

			$('.backpack_circle').css('animation','draw 2s linear');
			$('.inner_backpack_circle').css('animation','reverse_draw 2s linear');
			$('.backpack_circle').css('stroke','#79E8CC');
			$('.inner_backpack_circle').css('stroke','#79E8CC');
		}
	});

	// SIGHTSEEING
	// -------------------------------------------

	var oParkAnime= anime({
		targets:'.park_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:900,
		autoplay:true,
	
	});

	var oMuseumAnime= anime({
		targets:'.museum_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1100,
		autoplay:true,
		
	});

	var oShopAnime= anime({
		targets:'.shop_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1300,
		autoplay:true,
		
	});

	var oSightAllAnime= anime({
		targets:'.sight_all_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,
		complete:function(){
			$('.sight_all_circle').css('animation','draw 2s linear');
			$('.inner_sight_all_circle').css('animation','reverse_draw 2s linear');
			$('.sight_all_circle').css('stroke','#79E8CC');
			$('.inner_sight_all_circle').css('stroke','#79E8CC');

			$('.park_circle').css('animation','draw 2s linear');
			$('.inner_park_circle').css('animation','reverse_draw 2s linear');
			$('.park_circle').css('stroke','#79E8CC');
			$('.inner_park_circle').css('stroke','#79E8CC');

			$('.shop_circle').css('animation','draw 2s linear');
			$('.inner_shop_circle').css('animation','reverse_draw 2s linear');
			$('.shop_circle').css('stroke','#79E8CC');
			$('.inner_shop_circle').css('stroke','#79E8CC');

			$('.museum_circle').css('animation','draw 2s linear');
			$('.inner_museum_circle').css('animation','reverse_draw 2s linear');
			$('.museum_circle').css('stroke','#79E8CC');
			$('.inner_museum_circle').css('stroke','#79E8CC');
		}
	});

	// TRANSPORT
	// -------------------------------------------

	var oBusAnime= anime({
		targets:'.bus_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:900,
		autoplay:true,
	
	});

	var oTrainAnime= anime({
		targets:'.train_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1100,
		autoplay:true,
		
	});

	var oBikeAnime= anime({
		targets:'.bike_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1300,
		autoplay:true,
		
	});

	var oTransportAllAnime= anime({
		targets:'.transport_all_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,
		complete:function(){
			$('.transport_all_circle').css('animation','draw 2s linear');
			$('.inner_transport_all_circle').css('animation','reverse_draw 2s linear');
			$('.transport_all_circle').css('stroke','#79E8CC');
			$('.inner_transport_all_circle').css('stroke','#79E8CC');

			$('.bus_circle').css('animation','draw 2s linear');
			$('.inner_bus_circle').css('animation','reverse_draw 2s linear');
			$('.bus_circle').css('stroke','#79E8CC');
			$('.inner_bus_circle').css('stroke','#79E8CC');

			$('.train_circle').css('animation','draw 2s linear');
			$('.inner_train_circle').css('animation','reverse_draw 2s linear');
			$('.train_circle').css('stroke','#79E8CC');
			$('.inner_train_circle').css('stroke','#79E8CC');

			$('.bike_circle').css('animation','draw 2s linear');
			$('.inner_bike_circle').css('animation','reverse_draw 2s linear');
			$('.bike_circle').css('stroke','#79E8CC');
			$('.inner_bike_circle').css('stroke','#79E8CC');
		}
	});



});