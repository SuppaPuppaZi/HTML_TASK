function init() {
	let map = new ymaps.Map("map", {
	center: [55.755864, 37.617698], 
	zoom: 12
});

map.controls.remove('geolocationControl'); 
map.controls.remove('searchControl'); 
map.controls.remove('trafficControl'); 
map.controls.remove('typeSelector'); 
map.controls.remove('fullscreenControl'); 
map.controls.remove('zoomControl'); 
map.controls.remove('rulerControl');
map.behaviors.disable(['scrollZoom']);

} 

ymaps.ready(init);