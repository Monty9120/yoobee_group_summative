const version = '?v=20170901';
const clientId = '&client_id=YTFJT5GDKQ5LUZQJEZSMUK40N4AY3Y3W3GYD2X5YUODIUNH3';
const clientSecret = '&client_secret=GVRXH1OUJGKNMQBNXSZ5BWZBVPR0EIRPZF1BHRSOL0MZRLGN';

const key = version + clientId + clientSecret;

console.log(key)
var map;
var venueGroup;
var customRadius;
var marker;

// var locationIcon = L.icon({
// 	iconUrl:'custom_images/icon_location.svg',
// 	iconSize: [40,40],
// });

// var barIcon = L.icon({
// 	iconUrl:'custom_images/icon_bar.svg',
// 	iconSize: [40,40],
// });

// var foodIcon = L.icon({
// 	iconUrl:'custom_images/icon_food.svg',
// 	iconSize: [40,40],
// });
// var parkIcon = L.icon({
// 	iconUrl:'custom_images/icon_park.svg',
// 	iconSize: [40,40],
// });

// var hotelIcon = L.icon({
// 	iconUrl:'custom_images/icon_hotel.svg',
// 	iconSize: [40,40],
// });

// var gymIcon = L.icon({
// 	iconUrl:'custom_images/icon_gym.svg',
// 	iconSize: [40,40],
// });

// var cafeIcon = L.icon({
// 	iconUrl:'custom_images/icon_coffee.svg',
// 	iconSize: [40,40],
// });

// var harbourIcon = L.icon({
// 	iconUrl:'custom_images/icon_boat.svg',
// 	iconSize: [40,40],
// })



var locationIcon = 'custom_images/icon_location.svg';

var barIcon = 'custom_images/icon_bar.svg';

var foodIcon = 'custom_images/icon_food.svg';
var parkIcon = 'custom_images/icon_park.svg';

var hotelIcon = 'custom_images/icon_hotel.svg';

var gymIcon = 'custom_images/icon_gym.svg';

var cafeIcon = 'custom_images/icon_coffee.svg';

var harbourIcon = 'custom_images/icon_boat.svg';





$(function(){

	//Leaflet Map
	var center ={lat:-36.842744,lng:174.766994};
	map = L.map('map',{
		doubleClickZoom: false,
	}).setView(center,14);
	venueGroup = L.layerGroup().addTo(map);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw').addTo(map);

	defaultRadius = $('.slider').val();
	var circle = L.circle(center,{
		radius:defaultRadius,
		weight:2,
		className:'circle'
	}).addTo(map);
	customRadius = circle._mRadius
	


	$('#map').on('click','.custom-icon',function(){
		$('.custom-icon').removeClass('selected-icon')
		$(this).addClass('selected-icon')
	});


	$('#map').dblclick(function(e) {
	  	var center = map.mouseEventToLatLng(e.originalEvent);

  		circle.setLatLng(center)
  		loadVenues(center.lat,center.lng)
	});



	//End of Leaflet Map

	//Circle slider
	$('.slider').on('change',function(){
			customRadius = circle.setRadius($('.slider').val());;
			
			customRadius = customRadius._mRadius


	});





});
// -	-	-	-	-	jQuery end 	-	-	-	-	

//Find venues in selected area
function loadVenues(lat,lng){

	let exploreUrl = 'https://api.foursquare.com/v2/venues/explore'+key+'&limit=50&radius='+customRadius+'&ll='+lat+','+lng;

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
					category:item.venue.categories["0"].name
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
				        icon = gymIcon;
				        break;
				    case "Bar":
				    case "Cocktail Bar": 
				        icon = barIcon;
				        break;
				    case "Coffee Shop":
				    case "Café":
				    case "Coffee":
				        icon = cafeIcon;
				        break;
				    case "Sandwich Place":
				    case "Muffin Break":
				    case "Koren Restaurant":
				    case "Restaurant":
				    case "Pub":
				    case "Thai Restaurant":
				    case "Pizza":
				    case "Burger Joint":
				    case "Pizza Place":
				    case "Restaurant":
				    case "Asian Restaurant":
				    case "Seafood Restaurant":
				    case "Dessert Shop":
				    case "Snack Place":
				    case "Portuguese Restaurant":
				    case "Chinese Restaurant":
				    	icon = foodIcon;
				    	break;
				   	case "Harbor / Marina":
				   		icon = harbourIcon
				   		break;
				    default:
				        icon = locationIcon
				}


				var myIcon = L.divIcon({ 
				    iconSize: new L.Point(35, 35), 
				    html: '<div class="custom-icon"><img src="'+icon+'"></div>'
				});

				let marker = L.marker(venue.latlng,{icon:myIcon}).addTo(venueGroup);
				marker.bindPopup('<div>'+venue.name+'</div>');



				

			});
		}

	});
}










