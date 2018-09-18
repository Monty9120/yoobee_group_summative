$(function(){
// HIDE OPTION BUTTONS---------------------------
	$('.accommodation_wrap').hide();
    $('.sightseeing_wrap').hide();
    $('.transport_wrap').hide();	    
    $('.food_wrap').hide();

	// button animation

// // FOOD-------------------------------------------

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

// ACCOMMODATION--------------------------------------

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

	var oFoodAnime= anime({
		targets:'.food_wrap',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:900,
		autoplay:true,
	
	});

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



	//-----TATIANA----CATEGORY SELECT - OPTION BUTTONS SHOW--------------

	$('.ctg-food').on('click',function(){
		$('.ctg-food').css('color','#79E8CC');
		$('.ctg-accomm').css('color','white');
		$('.ctg-sights').css('color','white');
		$('.ctg-transp').css('color','white');
	    $('.accommodation_wrap').hide();
	    $('.sightseeing_wrap').hide();
	    $('.transport_wrap').hide();	    
	    $('.food_wrap').show();
	    oCafeAnime.play();
	    oBarAnime.play();
	    oRestaurantAnime.play();
	   	oFoodAllAnime.play();

  	});

  	$('.ctg-accomm').on('click',function(){
  		$('.ctg-accomm').css('color','#79E8CC');
		$('.ctg-food').css('color','white');
		$('.ctg-sights').css('color','white');
		$('.ctg-transp').css('color','white');	    
	    $('.sightseeing_wrap').hide();
	    $('.transport_wrap').hide();	    
	    $('.food_wrap').hide();
	    $('.accommodation_wrap').show();
	    oHotelAnime.play();
	    oMotelAnime.play();
	    oBackpackAnime.play();
	    oAccomAllAnime.play();
  	});

  	$('.ctg-sights').on('click',function(){
  		$('.ctg-sights').css('color','#79E8CC');
		$('.ctg-accomm').css('color','white');
		$('.ctg-food').css('color','white');
		$('.ctg-transp').css('color','white');
	    $('.accommodation_wrap').hide();	    
	    $('.transport_wrap').hide();	    
	    $('.food_wrap').hide();
	    $('.sightseeing_wrap').show();
	    oParkAnime.play();
	    oMuseumAnime.play();
	    oSightAllAnime.play();
	   	oShopAnime.play();
	 
  	});

  	$('.ctg-transp').on('click',function(){
  		$('.ctg-transp').css('color','#79E8CC');
		$('.ctg-accomm').css('color','white');
		$('.ctg-sights').css('color','white');
		$('.ctg-food').css('color','white');
	    $('.accommodation_wrap').hide();
	    $('.sightseeing_wrap').hide();
	    $('.food_wrap').hide();
	    $('.transport_wrap').show();
	    oTransportAllAnime.play();
	    oTrainAnime.play();
	    oBikeAnime.play();
	    oBusAnime.play();
  	});

	//----TATIANA's FINISHED HERE

  	// REVIEW ANIMATION "Stan"

  	var oRatingAnime = anime({
  		targets:'.review-box',
		translateX:[-100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,

  	});

  	  var oGraphAnime = anime({
  		targets:'.graph',
		translateX:[100,0],
		opacity:[0,1],
		easing:'linear',
		duration:1500,
		autoplay:true,

  	});


	$('.rating-graph').hide();
	$('.dropdown').on('click',function(){
		$('.rating-graph').show();
		oRatingAnime.play();
		oGraphAnime.play();

	});


});



// ----------REVIEW GRAPH--------------------
var width = 600;
height = 600;
margin = 100;


var jobs = [
{name:'5',user:650, icon:'star'},
{name:'4',user:543, icon:'star'},
{name:'3',user:436, icon:'star'},
{name:'2',user:322, icon:'star'},
{name:'1',user:116, icon:'star'},

];

var spacing = width/jobs.length;

var colGen = d3.scaleOrdinal(['#79E8CC','#AFD78C','#FED859','#FDB154','#FD8C63']);


var xScale = d3.scaleLinear()
.domain([0,100])
.range([0,width]);

var xAxisGen = d3.axisBottom(xScale).ticks(4);


var chart = d3.select('.chart')
.attr('viewBox','0 0 '+(width+margin*2)+' '+(height+margin))
.append('g')
.attr('transform','translate('+margin+',50)');



var barsGroups = chart.selectAll('g')
.data(jobs)
.enter()
.append('g')
.attr('transform',(d,i)=>'translate(0,'+i*spacing+')');

barsGroups.append('rect')
.attr('class','data-bar')
.attr('height',100)
.attr('fill',(d,i)=>colGen(i))
.transition()
.duration(5000)
.attr('width',(d)=>d.user)
.attr('x',60)
.attr('y',20)

barsGroups.append('g')
.attr('fill',(d,i)=>colGen(i))
.append(function(d){
	return d3.select('.icons .'+ d.icon).node().cloneNode(true);
})
.attr('transform','translate('+-90+','+0+') scale('+spacing/900+')'),


barsGroups.append('text')
.text((d)=>d.name)
.attr("transform", "translate(-110,100)")
.attr('text-anchor','end')
.style("font-size", "100px")
.attr('fill',(d,i)=>colGen(i))


var tooltip = chart.append('g')
.attr('opacity',0);

tooltip.append('rect')
.attr('pointer-events','none')
.attr('width',300)
.attr('height',50)
.attr('fill','rgba(0,0,200,0.3)');

tooltipText = tooltip.append('text')
.text('bla')
.attr('x',150)
.attr('y',30)
.attr('text-anchor','middle')
.attr('alignment-baseline','middle')
.style('font-size', '30px')

var dataBars = chart.selectAll('.data-bar');

dataBars.on('mouseover',function(d){
	tooltipText.text(d.name + ' : '+ d.user);
	tooltip.attr('opacity',1);
});

dataBars.on('mouseout',function(d){

	tooltip.attr('opacity',0);
});

dataBars.on('mousemove',function(){
	var mousePos = d3.mouse(this.parentNode.parentNode);

	var xPos = mousePos[0];
	var yPos = mousePos[1];
	tooltip.attr('transform','translate('+xPos+','+yPos+')');
});



svg=d3.select("#chart")
.append("svg")

var defs = svg.append("defs");


var filter = defs.append("filter")
.attr("id", "drop-shadow")
.attr("height", "130%");

filter.append("feGaussianBlur")
.attr("in", "SourceAlpha")
.attr("stdDeviation", 5)
.attr("result", "blur");

filter.append("feOffset")
.attr("in", "blur")
.attr("dx", 5)
.attr("dy", 5)
.attr("result", "offsetBlur");

