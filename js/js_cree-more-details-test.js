const version = '?v=20170901';
const clientId = '&client_id=TEOMTULWIDZGIMDRL31PQEQAHFI550SUFDSK3S42ZUTLU0PS';
const clientSecret = '&client_secret=JDNFWZICWDDLBE43XDPEA4BWG3F0GNXIVCWVDQQF534UN5DL';

const key = version + clientId + clientSecret;

// console.log(key)
var map;
var venueGroup;
var customRadius;
var marker;


var locationIcon = 'custom_images/icon_location.svg';
var barIcon = 'custom_images/icon_bar.svg';
var foodIcon = 'custom_images/icon_food.svg';
var parkIcon = 'custom_images/icon_park.svg';
var hotelIcon = 'custom_images/icon_hotel.svg';
var gymIcon = 'custom_images/icon_gym.svg';
var cafeIcon = 'custom_images/icon_coffee.svg';
var harbourIcon = 'custom_images/icon_boat.svg';
var trailIcon = 'custom_images/icon_trail.svg';
var busIcon = 'custom_images/icon_bus.svg';
var gasIcon = 'custom_images/icon_gas.svg';
var liquorIcon = 'custom_images/icon_liquor.svg';

$(function(){

	//Leaflet Map
	var center ={lat:-36.842744,lng:174.766994};
	map = L.map('map',{
		doubleClickZoom: false,
		zoomControl:false
	}).setView(center,14);
	venueGroup = L.layerGroup().addTo(map);

	L.control.zoom({position:'topright'}).addTo(map);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw').addTo(map);

	//Circle
	defaultRadius = $('.slider').val();
	var circle = L.circle(center,{
		radius:defaultRadius,
		weight:2,
		className:'circle'
	}).addTo(map);
	customRadius = circle._mRadius
	

	//Map icons on click event
	$('#map').on('click','.custom-icon',function(e){

		$('.custom-icon').removeClass('selected-icon')
		$(this).addClass('selected-icon')

	});



	//Move center circle to mouse pos
	$('#map').on('click',function(e) {
		if($(this).hasClass('no-click')){
			$(this).removeClass('no-click')
		}else{
			//if icon is clicked
			if($(e.target).hasClass('the-icon') == false){
				var center = map.mouseEventToLatLng(e.originalEvent);
		  		circle.setLatLng(center)
		  		loadVenues(center.lat,center.lng)
			}
			
		}
	});
	map.on('movestart',function(){
		$('#map').addClass('no-click')
	});




	//End of Leaflet Map

	//Circle slider
	$('.slider').on('input',function(){
			customRadius = circle.setRadius($('.slider').val());;
			
			customRadius = customRadius._mRadius

			$('.slider-number').html(customRadius + ' meters')
			if (customRadius >= 1000) {
				var units = customRadius/1000;
				$('.slider-number').html(units.toFixed(2) + ' km')
			}

	});

//------TATIANA - LandMarks
	var landmarks = [
		{
			latlngs:[
	            {lng:174.33380126953122,lat:-36.69264861993993},
	            {lng:174.45739746093747,lat:-36.6816360656152},
	            {lng:174.605712890625,lat:-36.71466899719827},
	            {lng:174.62493896484375,lat:-36.69705320010032},
	            {lng:174.66888427734375,lat:-36.69264861993993},
	            {lng:174.715576171875,lat:-36.701457527917896},
	            {lng:174.7100830078125,lat:-36.675027776102},
	            {lng:174.76776123046875,lat:-36.62434536776987},
	            {lng:174.7760009765625,lat:-36.39696752441777},
	            {lng:174.8748779296875,lat:-36.37485644939406},
	            {lng:174.8309326171875,lat:-36.277493049943466},
	            {lng:174.68536376953125,lat:-36.2243344853143},
	            {lng:174.47387695312497,lat:-36.24870331653197},
	            {lng:174.342041015625,lat:-36.319551259461186},
	            {lng:174.2596435546875,lat:-36.29741818650809},
	            {lng:174.15802001953125,lat:-36.46547188679815},
	            {lng:174.1717529296875,lat:-36.49638952000397},
	            {lng:174.33380126953122,lat:-36.69264861993993}
		    ],
			description:'Rodney',
			className:'region-landmark'
		},
		{
			latlngs:[
	            {lng:174.33380126953122,lat:-36.69264861993993},
	            {lng:174.42718505859372,lat:-36.83566824724438},
	            {lng:174.43267822265625,lat:-36.87962060502676},
	            {lng:174.45465087890625,lat:-36.86424015502006},
	            {lng:174.5068359375,lat:-36.86643755175846},
	            {lng:174.5562744140625,lat:-36.84006462037766},
	            {lng:174.59197998046875,lat:-36.82687474287728},
	            {lng:174.59747314453125,lat:-36.78509179597694},
	            {lng:174.6441650390625,lat:-36.76749215619673},
	            {lng:174.676659,lat:-36.791512},
	            {lng:174.695565,lat:-36.828223},
	            {lng:174.7430419921875,lat:-36.8224776116662},
	            {lng:174.78973388671875,lat:-36.83566824724438},
	            {lng:174.81719970703122,lat:-36.829073213728066},
	            {lng:174.7430419921875,lat:-36.66401269884168},
	            {lng:174.7100830078125,lat:-36.675027776102},
	            {lng:174.715576171875,lat:-36.701457527917896},
	            {lng:174.66888427734375,lat:-36.69264861993993},
	            {lng:174.62493896484375,lat:-36.69705320010032},
	            {lng:174.605712890625,lat:-36.71466899719827},
	            {lng:174.45739746093747,lat:-36.6816360656152},
	            {lng:174.33380126953122,lat:-36.69264861993993}
	        ],
			description:'North Shore',
			className:'region-landmark'
		},
		{
			latlngs:[
				 {lng:174.43267822265625,lat:-36.87962060502676},
	            {lng:174.46014404296875,lat:-36.96525497589677},
	            {lng:174.47387695312497,lat:-37.03544721652363},
	            {lng:174.49859619140625,lat:-37.05298514989097},
	            {lng:174.58648681640625,lat:-37.01132594307013},
	            {lng:174.6112060546875,lat:-37.02448395075963},
	            {lng:174.61669921875,lat:-36.99816565700227},
	            {lng:174.6881103515625,lat:-36.93233006150314},
	            {lng:174.68536376953125,lat:-36.90597988519294},
	            {lng:174.65789794921875,lat:-36.87962060502676},
	            {lng:174.67712402343747,lat:-36.86204269508727},
	            {lng:174.695565,lat:-36.828223},
	            {lng:174.676659,lat:-36.791512},
	            {lng:174.6441650390625,lat:-36.76749215619673},
	            {lng:174.59747314453125,lat:-36.78509179597694},
	            {lng:174.59197998046875,lat:-36.82687474287728},	            
	            {lng:174.5562744140625,lat:-36.84006462037766},
	            {lng:174.5068359375,lat:-36.86643755175846},
	            {lng:174.45465087890625,lat:-36.86424015502006},
	            {lng:174.43267822265625,lat:-36.87962060502676}	

	        ],
			description:'West Auckland',
			className:'region-landmark'
		},
		{
			latlngs:[	            
				{lng:174.7107696533203,lat:-36.852153343396665},
	            {lng:174.71420288085938,lat:-36.85874638670162},
	            {lng:174.7162628173828,lat:-36.899390918542906},
	            {lng:174.737548828125,lat:-36.8955470919156},
	            {lng:174.75677490234375,lat:-36.8911539101446},
	            {lng:174.78355407714844,lat:-36.88950640179279},
	            {lng:174.80209350585935,lat:-36.89225222929218},
	            {lng:174.8247528076172,lat:-36.88895722444082},
	            {lng:174.83917236328125,lat:-36.88181755936462},
	            {lng:174.8700714111328,lat:-36.87797284779546},
	            {lng:174.8968505859375,lat:-36.87302936279295},
	            {lng:174.87968444824216,lat:-36.84830713884687},
	            {lng:174.86320495605466,lat:-36.841713195150085},
	            {lng:174.78561401367185,lat:-36.83896555078596},
	            {lng:174.74510192871094,lat:-36.831821213456145},
	            {lng:174.7107696533203,lat:-36.852153343396665}
		    ],
			description:'Central Auckland',
			idName:'central-auckland',
			className:'region-landmark'
		},
		{
			latlngs:[ 
	            {lng:174.7107696533203,lat:-36.852153343396665},
	            {lng:174.70184326171875,lat:-36.84775766525784},
	            {lng:174.69017028808594,lat:-36.877423587484586},
	            {lng:174.67575073242185,lat:-36.86314143295289},
	            {lng:174.65789794921875,lat:-36.87907135656656},
	            {lng:174.68536376953125,lat:-36.90488176359684},
	            {lng:174.6881103515625,lat:-36.931781192369186},
	            {lng:174.7327423095703,lat:-36.94111143010769},
	            {lng:174.7711944580078,lat:-36.96306042436515},
	            {lng:174.7313690185547,lat:-36.9592198069719},
	            {lng:174.74098205566406,lat:-36.99981081734932},
	            {lng:174.7533416748047,lat:-36.99377838872516},
	            {lng:174.7602081298828,lat:-36.986100060204095},
	            {lng:174.76913452148438,lat:-36.9795180188502},
	            {lng:174.81719970703122,lat:-36.97512967493796},
	            {lng:174.84535217285156,lat:-36.97074107796435},
	            {lng:174.8700714111328,lat:-36.96031714599469},
	            {lng:174.8968505859375,lat:-36.94879429756636},
	            {lng:174.91195678710938,lat:-36.919705071514564},
	            {lng:174.95384216308594,lat:-36.896096221858116},
	            {lng:174.89891052246094,lat:-36.84006462037766},
	            {lng:174.8961639404297,lat:-36.872480066931246},
	            {lng:174.83848571777344,lat:-36.88181755936462},
	            {lng:174.82406616210938,lat:-36.88895722444082},
	            {lng:174.80140686035153,lat:-36.89225222929218},
	            {lng:174.781494140625,lat:-36.88895722444082},
	            {lng:174.7554016113281,lat:-36.8911539101446},
	            {lng:174.715576171875,lat:-36.899390918542906},
	            {lng:174.71351623535156,lat:-36.85874638670162},
	            {lng:174.7107696533203,lat:-36.852153343396665}
	        ],
			description:'East Auckland',
			className:'region-landmark'
		},
		{
			latlngs:[
				{lng:174.54116821289062,lat:-37.04312056092881},
	            {lng:174.52880859375,lat:-37.058464923097716},
	            {lng:174.65377807617188,lat:-37.289350362163546},
	            {lng:174.68399047851562,lat:-37.27733111863006},
	            {lng:174.71969604492188,lat:-37.27077435856147},
	            {lng:174.78012084960938,lat:-37.27951657841374},
	            {lng:174.8323059082031,lat:-37.28497995025375},
	            {lng:174.91058349609372,lat:-37.31119861382922},
	            {lng:175.02182006835938,lat:-37.313383089908044},
	            {lng:175.06988525390625,lat:-37.289350362163546},
	            {lng:175.12481689453125,lat:-37.280609284509985},
	            {lng:175.2264404296875,lat:-37.235795328042364},
	            {lng:175.23605346679688,lat:-37.211737825121894},
	            {lng:175.25527954101562,lat:-37.19533058280063},
	            {lng:175.32669067382812,lat:-37.183296338395685},
	            {lng:175.30059814453122,lat:-37.11762125285503},
	            {lng:175.30471801757812,lat:-37.01900172446115},
	            {lng:175.24978637695312,lat:-36.95098926024786},
	            {lng:175.18524169921875,lat:-36.924645533971265},
	            {lng:175.09872436523438,lat:-36.927938997766766},
	            {lng:175.10147094726562,lat:-36.89389967838269},
	            {lng:175.038694,lat:-36.871418},
	            {lng:174.97512817382812,lat:-36.87412794266633},
	            {lng:174.95452880859375,lat:-36.89499795802218},
	            {lng:174.91195678710938,lat:-36.91915611148193},
	            {lng:174.89547729492185,lat:-36.94879429756636},
	            {lng:174.84466552734375,lat:-36.97074107796435},
	            {lng:174.76913452148438,lat:-36.978420956597255},
	            {lng:174.75402832031247,lat:-36.99377838872516},
	            {lng:174.74166870117188,lat:-36.999262434522},
            	{lng:174.74029541015625,lat:-36.99981081734932},
				{lng:174.76158142089844,lat:-37.0206464338878},
				{lng:174.82269287109375,lat:-37.01845348007392},
				{lng:174.85015869140625,lat:-37.036543456060535},
				{lng:174.83917236328125,lat:-37.05791696358488},
   				{lng:174.80690002441406,lat:-37.082023438186745},          
 				{lng:174.76982116699216,lat:-37.08476232544295},
				{lng:174.7368621826172,lat:-37.12090636165327},
				{lng:174.67987060546875,lat:-37.13021339575457},
				{lng:174.6599578857422,lat:-37.08421455590844},
				{lng:174.68399047851562,lat:-37.0551771066608},
				{lng:174.66339111328125,lat:-37.04038016980841},
            	{lng:174.63043212890622,lat:-37.032706548443514},
	            {lng:174.54116821289062,lat:-37.04312056092881}
	        ],
			description:'South Auckland',
			className:'region-landmark'
		}

	];



	_(landmarks).each(function(landmark){

		let polygon = L.polygon(landmark.latlngs,{
			color:'coral',
			weight:1
		}).addTo(map);

	});

	//----Zooming in the selected area
	$('#area-dropdown').on('change',function(){
		var area = $(this).val();
		console.log(area);
		var center = {lat:-36.842744,lng:174.766994};
		if(area == 'allauckland'){
			center = {lat:-36.768684,lng:174.707236};
			map.setView(center,9);
		}else{
			if(area == 'central'){
				center = {lat:-36.8563,lng:	174.7619};
				map.setView(center,13);
			}else{
				if(area == 'north'){
					center = {lat:-36.7455,lng:174.7128};
					map.setView(center,10);
				}else{
					if(area == 'east'){
						center = {lat:-36.9214,lng:174.8309};
						map.setView(center,11);
					}else{
						if(area == 'south'){
							center = {lat:-36.972508,lng:174.885779};
							map.setView(center,9);
						}else{
							if(area == 'west'){
								center = {lat:-36.8994,lng:	174.6222};
								map.setView(center,11);
							}else{
								center = {lat:-36.4765,lng:174.5233};
								map.setView(center,9);
							}
						}
					}
				}
			}
		}

		// map.setView(center,12);

	});





//------TATIANA's code finished here


//------Cree's javascript - More details


//------Cree's javascript - More details E N D
	

});
// -	-	-	-	-	jQuery end 	-	-	-	-	

//Find venues in selected area
function loadVenues(lat,lng){

	let exploreUrl = 'https://api.foursquare.com/v2/venues/explore'+key+'&limit=75&radius='+customRadius+'&ll='+lat+','+lng;

	$.ajax({
		url:exploreUrl,
		dataType:'jsonp',
		success:function(res){
			// console.log(res.response.groups["0"].items);
			var data = res.response.groups["0"].items;
			var venues = _(data).map(function(item){



				return {
					latlng:{lat:item.venue.location.lat,lng:item.venue.location.lng},
					name:item.venue.name,
					venueid:item.venue.id,
					category:item.venue.categories["0"].name,
					address:item.venue.location.formattedAddress,

				};


			});

		


			venueGroup.clearLayers();
			_(venues).each(function(venue){

				switch(venue.category) {
					case "Park":
					icon = parkIcon;
					break;
					case "Scenic Lookout":
					icon = parkIcon;
					break;
					case "Hotel":
					icon = hotelIcon;
					break;
					case "Gym":
					case "Gym / Fitness Center":
					icon = gymIcon;
					break;
					case "Bar":
					case "Cocktail Bar": 
					icon = barIcon;
					break;
					case "Coffee Shop":
					case "Café":
					case "Coffee":
					case "Bistro":
					icon = cafeIcon;
					break;
					case "Sandwich Place":
					case "Muffin Break":
					case "Dessert Shop":
					case "Snack Place":
					case "Restaurant":
					case "Pub":
					case "Pizza":
					case "Burger Joint":
					case "Pizza Place":
					case "Restaurant":
					case "Asian Restaurant":
					case "Seafood Restaurant":
					case "Korean Restaurant":
					case "Thai Restaurant":
					case "Portuguese Restaurant":
					case "Japanese Restaurant":
					case "Chinese Restaurant":
					case "Indian Restaurant":
					case "Italian Restaurant":
					case "Fast Food Restaurant":
					case "Sushi Restaurant":
					case "Turkish Restaurant":
					case "Mediterranean Restaurant":
					case "Falafel Restaurant":
					case "Mexican Restaurant":
					case "Bakery":
					case "Grocery Store":
					case "Supermarket":
					case "Noodle House":
					case "Ice Cream Shop":
					case "BBQ Joint":
					case "Fish & Chips Shop":
					case "Steakhouse":
					case "Liquor Store":
					icon = foodIcon;
					break;
					case "Harbor / Marina":
					icon = harbourIcon
					break;
					case "Trail":
					icon = trailIcon
					break;
					case "Bus Station":
					icon = busIcon
					break;
					case "Gas Station":
					icon = gasIcon
					break;
					case "Liquor Store":
					icon = parkIcon
					break;
					default:
					icon = locationIcon
				}


				var myIcon = L.divIcon({ 
					iconSize: new L.Point(35, 35), 
					html: '<div class="custom-icon"><img class="the-icon" src="'+icon+'"></div>'
				});

				let marker = L.marker(venue.latlng,{icon:myIcon}).addTo(venueGroup);
				marker.bindPopup('<div class="custom-map-popup"><img src="'+icon+'"><h1>'+venue.name+'</h1><p>"'+venue.address+'"</p><a href="#" class="more-info sqr-bttn btn btn-primary"  data-toggle="modal" data-target="#exampleModalLong">More info</a><a href="#" class="get-directions sqr-bttn btn btn-primary">Get directions</a></div>');

				var venueInfo = $('.more-info');

				marker.venueid = venue.venueid;

				marker.on('click',function(){

					var venueUrl = 	'https://api.foursquare.com/v2/venues/'+
					this.venueid+key;

					console.log(venueUrl);

					$.ajax({
						url:venueUrl,
						dataType:'jsonp',
						success:function(res){ 
							console.log(res);
							var venue = res.response.venue;
							$('.modal-title').text(venue.name);
							// $('.venue-description').text(venue.page.pageInfo.description);
							$('.venue-location span').text(venue.location.formattedAddress);
							$('.venue-phone-number span').text(venue.contact.formattedPhone);
							$('.venue-open-hours span.open-now').text(venue.contact.richStatus.status);
							$('.venue-open-hours ul.weekly-hours li').text(venue.contact.richStatus.status);

							
						}
					});

					// Venue opening hours

					var openHours = $('.venue-open-hours');

					openHours.on('click', function(){


						var weeklyHours = $('.venue-open-hours').data('reveal');

						// Open and close opening hours

						if (weeklyHours == 'close'){
							console.log(weeklyHours);

							$('.venue-open-hours ul.weekly-hours').addClass('open-hours')
							$('.venue-open-hours').data('reveal', 'open');

						} else {
							console.log(weeklyHours);
							$('.venue-open-hours ul.weekly-hours').removeClass('open-hours').data('reveal', 'close');
							$('.venue-open-hours').data('reveal', 'close');

						}


       					// Get Venue Hours 

       					marker.venueid = venue.venueid;

       					let hoursUrl = 'https://api.foursquare.com/v2/venues/'+venueid+'/hours'+key;

       					console.log(hoursUrl);


       				});
 
				});
			}

	});
}











