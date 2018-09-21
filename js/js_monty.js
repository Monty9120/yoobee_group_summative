const version = '?v=20170901';
const clientId = '&client_id=TEOMTULWIDZGIMDRL31PQEQAHFI550SUFDSK3S42ZUTLU0PS';
const clientSecret = '&client_secret=JDNFWZICWDDLBE43XDPEA4BWG3F0GNXIVCWVDQQF534UN5DL';

const key = version + clientId + clientSecret;

// console.log(key)
var map;
var venueGroup;
var customRadius;
var marker;
var addressLayer;
var directionsLayer;


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
var beachIcon = 'custom_images/icon_beach.svg';
var hostelIcon = 'custom_images/icon_backpack.svg';
var airportIcon = 'custom_images/icon_airport.svg';






var directionsService;

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

	addressLayer = L.layerGroup().addTo(map);
	directionsLayer = L.layerGroup().addTo(map);
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
			//if icon is clicked DONT move
			if($(e.target).hasClass('the-icon') == false){
				var center = map.mouseEventToLatLng(e.originalEvent);
		  		circle.setLatLng(center)
		  		loadVenues(center.lat,center.lng)
		  		loadBusStops(center.lat,center.lng)
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

//------TATIANA's CODE PART 1 - FILTERS SECTION

	//- - - - - -  -LANDMARKS- - - - - - -
	var landmarks =
		{
			allauckland:[
	            {lng:174.8199462890625,lat:-36.27970720524016},
	            {lng:174.78973388671875,lat:-36.26420679934512},
	            {lng:174.759521484375,lat:-36.25756282630297},
	            {lng:174.67987060546875,lat:-36.206606928590105},
	            {lng:174.61669921875,lat:-36.19774164407362},
	            {lng:174.52056884765622,lat:-36.226550147470896},
	            {lng:174.37225341796875,lat:-36.301845303684324},
	            {lng:174.3145751953125,lat:-36.31291199724547},
	            {lng:174.27337646484375,lat:-36.295204533693536},
	            {lng:174.13330078125,lat:-36.46105407505432},
	            {lng:174.4189453125,lat:-36.8224776116662},
	            {lng:174.47113037109375,lat:-37.05736900011469},
	            {lng:174.52880859375,lat:-37.06175259706909},
	            {lng:174.65240478515625,lat:-37.28497995025375},
	            {lng:174.72930908203125,lat:-37.258752148656086},
	            {lng:174.82818603515625,lat:-37.24563482182139},
	            {lng:174.95727539062497,lat:-37.26312408340918},
	            {lng:175.10833740234375,lat:-37.26312408340918},
	            {lng:175.23193359375,lat:-37.23251521134917},
	            {lng:175.24566650390625,lat:-37.21064411993447},
	            {lng:175.32257080078125,lat:-37.18220222107978},
	            {lng:175.308837890625,lat:-37.0551771066608},
	            {lng:175.29510498046875,lat:-36.985003092855955},
	            {lng:175.18798828125,lat:-36.925743371044966},
	            {lng:175.1275634765625,lat:-36.92354768108929},
	            {lng:175.05615234375,lat:-36.87302936279295},
	            {lng:174.9188232421875,lat:-36.86424015502006},
	            {lng:174.89410400390622,lat:-36.824676208856175},
	            {lng:174.81719970703122,lat:-36.8224776116662},
	            {lng:174.75677490234375,lat:-36.701457527917896},
	            {lng:174.77050781249997,lat:-36.6177321600059},
	            {lng:174.70458984375,lat:-36.57362961247928},
	            {lng:174.7869873046875,lat:-36.43896124085945},
	            {lng:174.86663818359375,lat:-36.36379855415863},
	            {lng:174.8199462890625,lat:-36.27970720524016}
            ],

			rodney:[
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
		   
			north:[
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
	            {lng:174.45739746093747,lat:-36.6816360656152}
	     	],
			west:[
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
			central:[	            
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
			east:[ 
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
			south:[
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
            	{lng:174.63043212890622,lat:-37.032706548443514}
	   		],

		};


	//- - - - - -ZOOMING IN AND HIGHTLIGHTING SELECTED AREA- - - - - -
	var areaPolygon = L.polygon([], {color: 'coral'}).addTo(map);
	
	$('#area-dropdown').on('change',function(){
		var area = $(this).val();
		console.log(area);
		var center = {lat:-36.842744,lng:174.766994};
		var suburb;
		if(area == 'allauckland'){
			center = {lat:-36.768684,lng:174.707236};
			map.setView(center,9);
			suburb = landmarks.allauckland;
		}else{
			if(area == 'central'){
				center = {lat:-36.8567,lng:174.8018};
				map.setView(center,13);
				suburb = landmarks.central;

			}else{
				if(area == 'north'){
					center = {lat:-36.7510,lng:174.5831};
					map.setView(center,11);
					suburb = landmarks.north;
				}else{
					if(area == 'east'){
						center = {lat:-36.9203,lng:174.7993};
						map.setView(center,12);
						suburb = landmarks.east;

					}else{
						if(area == 'south'){
							center = {lat:-37.1050,lng:174.9607};
							map.setView(center,10);
							suburb = landmarks.south;

						}else{
							if(area == 'west'){
								center = {lat:-36.8994,lng:	174.6222};
								map.setView(center,11);
								suburb = landmarks.west;

							}else{
								center = {lat:-36.4765,lng:174.5233};
								map.setView(center,10);
								suburb = landmarks.rodney;

							}
						}
					}
				}
			}
		}

		areaPolygon.setLatLngs(suburb)
		areaPolygon.setStyle({fillOpacity:0.1, stroke:1})
		// console.log(areaPolygon);

	});

	areaPolygon.on('click',function(){
		this.setStyle({fillOpacity:0, stroke:0});
	});

});

// - - - - - -AUTOCOMPLETE ADDRESS IN SEARCH FILTER - - - - - -

//Taken from Google Map - different way of naming class etc
var placeSearch, autocomplete;
var componentForm = {
	street_number: 'short_name',
	route: 'long_name',
	locality: 'long_name',
	administrative_area_level_1: 'short_name',
	country: 'long_name',
	postal_code: 'short_name'
};

var newCenter;
function initAutocomplete() {
	// Create the autocomplete object, restricting the search to geographical
	// location types.
	autocomplete = new google.maps.places.Autocomplete(
	    /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
	    {types: ['geocode']});

	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocomplete.addListener('place_changed', fillInAddress);

	directionsService = new google.maps.DirectionsService;
}



function fillInAddress() {
	// Get the place details from the autocomplete object.

	addressLayer.clearLayers();
	var place = autocomplete.getPlace();
	console.log(place);

	//Here is requested address
	newCenter = {lat:place.geometry.location.lat(),lng:place.geometry.location.lng()};

	map.setView(newCenter,14);

	var greenIcon = L.icon({
	    iconUrl: 'custom_images/green_icon_v2.png',
	    iconSize:[42,42]
	});

	let marker = L.marker(newCenter,{icon:greenIcon}).addTo(addressLayer);
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
	if (navigator.geolocation) {
	  	navigator.geolocation.getCurrentPosition(function(position) {
	    var geolocation = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };
	    var circle = new google.maps.Circle({
	      center: geolocation,
	      radius: position.coords.accuracy
	    });
	    autocomplete.setBounds(circle.getBounds());
	  });
	}
}


//-------TATIANA's CODE PART 1 FINISHED----------



// -	-	-	-	-	jQuery end 	-	-	-	-	

//Find venues in selected area
function loadVenues(lat,lng){

	let exploreUrl = 'https://api.foursquare.com/v2/venues/explore'+key+'&limit=75&radius='+customRadius+'&ll='+lat+','+lng;
	

	$.ajax({
		url:exploreUrl,
		dataType:'jsonp',
		success:function(res){
			console.log(res.response.groups["0"].items);
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

					var iconClass = '';
				switch(venue.category) {
				    case "Park":
				        icon = parkIcon;
				        iconClass = 'park';
				        break;
				    case "Scenic Lookout":
				    case "Campground":
				        icon = parkIcon;
				        break;
				    case "Hostel":
				        icon = hostelIcon;
				        break;
				     case "Hotel":
				        icon = hotelIcon;
				        iconClass = 'hotel';
				        break;
				    case "Gym":
				    case "Gym / Fitness Center":
				        icon = gymIcon;
				        break;
				    case "Bar":
				    case "Cocktail Bar":
				    	iconClass = 'bar'; 
				        icon = barIcon;
				        break;
				    case "Coffee Shop":
				    case "Café":
				    case "Coffee":
				    case "Bistro":
				    	iconClass = 'cafe';
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
				    case "French Restaurant":
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
				    	icon = foodIcon;
				    	iconClass = 'restaurant';
				    	break;
				    case "Liquor Store":
				    	icon = liquorIcon
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
				   	case "Beach":
				   	case "Bay":
				   		icon = beachIcon
				   		break;
				   	case "Airport":
				   		icon = airportIcon
				   		break;
				    default:
				        icon = locationIcon
				}


				var myIcon = L.divIcon({ 
				    iconSize: new L.Point(35, 35), 
				    html: '<div class="custom-icon  '+iconClass+'"><img class="the-icon" src="'+icon+'"></div>'
				});

				let marker = L.marker(venue.latlng,{icon:myIcon}).addTo(venueGroup);
				


				marker.bindPopup('<div id="mapPopup"><img src="'+icon+'"><h1>'+venue.name+'</h1><p>"'+venue.address+'"</p><a href="#" class="sqr-bttn">More info</a></div>');

				//-------TATIANA's CODE PART 2----------
				// - - - - - -GOOGLE MAP DIRECTIONS - - - - - -

				marker.on('click',function(){
					directionsLayer.clearLayers();
					

					if(newCenter){

						var request = {
				          origin: newCenter,
				          destination: this.getLatLng(),
				          travelMode: 'DRIVING'
				        };
						//ask directionsService to fulfill your request
					
						directionsService.route(request,function(response,status){

							var path = response.routes["0"].overview_path;
							console.log(path);

							var polyline = _(path).map(function(item){
								return {lat:item.lat(),lng:item.lng()};
							});

							L.polyline(polyline,{
								color:'#79E8CC',
								weight:3
							}).addTo(directionsLayer);
							console.log('hi');

						});
					}					
				})
				//-------TATIANA's CODE PART 2 FINISHED----------
			

			});
		}
	


	});

	$.ajax({
		url:transportUrl,
		dataType:'jsonp',
		success:function(res){
			// console.log(res.response.groups["0"].items);
			var data = res.response.groups["0"].items;
			var venues = _(data).map(function(item){
				return {
					latlng:{lat:item.venue.location.lat,lng:item.venue.location.lng},
					name:item.venue.name,
					venueid:item.venue.id,
					category:item.venue.categories["0"].name
				};

			});
		
		}

	});
}

// TO HERE
// ===============FILTER BUTTONS FOR CATEGORY==================


function loadBusStops(lat,lng){

	       //  // $.ajax({
        //  //    url: "https://api.at.govt.nz/v2/gtfs/stops/geosearch?lat='+lat+'&lng='+lng+'&distance=500",
        //  //    beforeSend: function(xhrObj){
        //  //        // Request headers
        //  //        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
        //  //    },
        //  //    success:function(res){
        //  //        console.log(res)
        //  //    }

        // });
}
$(function(){

	// ===========FOOD FILTER=========================
	$('.inner_cafe_circle').on('click',function(){
		$('.inner_cafe_circle').css('fill','#79E8CC');
		$('.inner_bar_circle').css('fill','white');
		$('.inner_restaurant_circle').css('fill','white');
		$('.inner_food_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.cafe').show();

	})

	$('.inner_bar_circle').on('click',function(){
		$('.inner_cafe_circle').css('fill','white');
		$('.inner_bar_circle').css('fill','#79E8CC');
		$('.inner_restaurant_circle').css('fill','white');
		$('.inner_food_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.bar').show();

	})

	$('.inner_restaurant_circle').on('click',function(){
		$('.inner_cafe_circle').css('fill','white');
		$('.inner_bar_circle').css('fill','white');
		$('.inner_restaurant_circle').css('fill','#79E8CC');
		$('.inner_food_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.restaurant').show();

	})

	$('.inner_food_all_circle').on('click',function(){
		$('.custom-icon').hide();
		$('.custom-icon.restaurant').show();
		$('.custom-icon.bar').show();
		$('.custom-icon.cafe').show();
		$('.inner_food_all_circle').css('fill','#79E8CC');
		$('.inner_cafe_circle').css('fill','white');
		$('.inner_bar_circle').css('fill','white');
		$('.inner_restaurant_circle').css('fill','white');
		

	})

	// ===========ACCOMMODATION FILTER=========================
	$('.inner_hotel_circle').on('click',function(){
		$('.inner_hotel_circle').css('fill','#79E8CC');
		$('.inner_motel_circle').css('fill','white');
		$('.inner_backpack_circle').css('fill','white');
		$('.inner_accom_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.hotel').show();

	})

	$('.inner_motel_circle').on('click',function(){
		$('.inner_motel_circle').css('fill','#79E8CC');
		$('.inner_hotel_circle').css('fill','white');
		$('.inner_backpack_circle').css('fill','white');
		$('.inner_accom_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.motel').show();

	})

	$('.inner_backpack_circle').on('click',function(){
		$('.inner_backpack_circle').css('fill','#79E8CC');
		$('.inner_hotel_circle').css('fill','white');
		$('.inner_motel_circle').css('fill','white');
		$('.inner_accom_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.backpack').show();

	})

	$('.inner_accom_all_circle').on('click',function(){
		$('.inner_accom_all_circle').css('fill','#79E8CC');
		$('.inner_hotel_circle').css('fill','white');
		$('.inner_motel_circle').css('fill','white');
		$('.inner_backpack_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.hotel').show();
		$('.custom-icon.motel').show();
		$('.custom-icon.backpack').show();

	})

	// ===========SIGHTSEEING FILTER=========================
	$('.inner_park_circle').on('click',function(){
		$('.inner_park_circle').css('fill','#79E8CC');
		$('.inner_museum_circle').css('fill','white');
		$('.inner_shop_circle').css('fill','white');
		$('.inner_sight_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.park').show();

	})

	$('.inner_museum_circle').on('click',function(){
		$('.inner_park_circle').css('fill','white');
		$('.inner_museum_circle').css('fill','#79E8CC');
		$('.inner_shop_circle').css('fill','white');
		$('.inner_sight_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.museum').show();

	})

	$('.inner_shop_circle').on('click',function(){
		$('.inner_park_circle').css('fill','white');
		$('.inner_shop_circle').css('fill','#79E8CC');
		$('.inner_museum_circle').css('fill','white');
		$('.inner_sight_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.shop').show();


	})


	$('.inner_sight_all_circle').on('click',function(){
		$('.inner_park_circle').css('fill','white');
		$('.inner_sight_all_circle').css('fill','#79E8CC');
		$('.inner_museum_circle').css('fill','white');
		$('.inner_shop_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.shop').show();
		$('.custom-icon.museum').show();
		$('.custom-icon.park').show();


	})

	// ===========TRANSPORT FILTER=========================
	$('.inner_bus_circle').on('click',function(){
		$('.inner_bus_circle').css('fill','#79E8CC');
		$('.inner_train_circle').css('fill','white');
		$('.inner_bike_circle').css('fill','white');
		$('.inner_transport_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.bus').show();

	})

	$('.inner_train_circle').on('click',function(){
		$('.inner_bus_circle').css('fill','white');
		$('.inner_train_circle').css('fill','#79E8CC');
		$('.inner_bike_circle').css('fill','white');
		$('.inner_transport_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.train').show();

	})

	$('.inner_bike_circle').on('click',function(){
		$('.inner_bus_circle').css('fill','white');
		$('.inner_bike_circle').css('fill','#79E8CC');
		$('.inner_train_circle').css('fill','white');
		$('.inner_transport_all_circle').css('fill','white');
		$('.custom-icon').hide();
		$('.custom-icon.bike').show();

	})

	$('.inner_transport_all_circle').on('click',function(){
		$('.inner_bus_circle').css('fill','white');
		$('.inner_bike_circle').css('fill','white');
		$('.inner_train_circle').css('fill','white');
		$('.inner_transport_all_circle').css('fill','79E8CC');
		$('.custom-icon').hide();
		$('.custom-icon.bike').show();
		$('.custom-icon.train').show();
		$('.custom-icon.bus').show();

	})

	// ===========INITIAL CLICK ON CATEGORY MAP DISPLAY=========================

	$('.ctg-food').on('click',function(){
		$('.custom-icon').hide();
		$('.custom-icon.bar').show();
		$('.custom-icon.cafe').show();
		$('.custom-icon.restaurant').show();

	});



});









