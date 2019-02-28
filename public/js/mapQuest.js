function initMap() {
	// add your code here
	L.mapquest.key = 'HsdAz9Hh1ht695m6bFmIy5AtP9F9em42'

	var map = L.mapquest.map('map',{
		center:[32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}