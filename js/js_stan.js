$(function(){

	// button animation
	// -------------------------------------------
	var oCafeAnime= anime({
		targets:'.cafe_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:900,
		autoplay:true,
		complete:function(){
			$('.cafe_circle').css('animation','draw 2s linear');
			$('.inner_cafe_circle').css('animation','reverse_draw 2s linear');
		}
	});

	var oBarAnime= anime({
		targets:'.bar_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1100,
		autoplay:true,
		complete:function(){
			$('.bar_circle').css('animation','draw 2s linear');
			$('.inner_bar_circle').css('animation','reverse_draw 2s linear');
		}
	});

	var oRestaurantAnime= anime({
		targets:'.restaurant_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1300,
		autoplay:true,
		complete:function(){
			$('.restaurant_circle').css('animation','draw 2s linear');
			$('.inner_restaurant_circle').css('animation','reverse_draw 2s linear');
		}
	});




	var oAllAnime= anime({
		targets:'.all_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,
		complete:function(){
			$('.all_circle').css('animation','draw 2s linear');
			$('.inner_all_circle').css('animation','reverse_draw 2s linear');
		}
	});



	// console.log(oRestaurantAnime)

});