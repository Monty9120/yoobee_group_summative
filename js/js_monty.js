const version = '?v=20170901';
const clientId = '&client_id=YTFJT5GDKQ5LUZQJEZSMUK40N4AY3Y3W3GYD2X5YUODIUNH3';
const clientSecret = '&client_secret=GVRXH1OUJGKNMQBNXSZ5BWZBVPR0EIRPZF1BHRSOL0MZRLGN';

const key = version + clientId + clientSecret;

console.log(key)
var map;

$(function(){

	//Leaflet Map
	console.log('hello')
	var center ={lat:-36.842744,lng:174.766994};
	map = L.map('map').setView(center,20);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw').addTo(map);


	var circle = L.circle(center,{
		radius:300,
		weight:2,
		className:'circle'
	}).addTo(map);


	$( '#map').click(function(e) {
	  	var center = map.mouseEventToLatLng(e.originalEvent);

  		circle.setLatLng(center)
  		console.log(center)
  		loadVenues(center.lat,center.lng)
	});

	//End of Leaflet Map

	//FourSquare



});



function loadVenues(lat,lng){



	let exploreUrl = 'https://api.foursquare.com/v2/venues/explore'+key+'&ll='+lat+','+lng;

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
				};
			});
			_(venues).each(function(venue){
				let marker = L.marker(venue.latlng).addTo(map);
				marker.bindPopup('<div>'+venue.name+'</div>');
			});
		}

	});
}










