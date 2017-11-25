
				function myMap() {
					var mapCanvas = document.getElementById("map");
					var mapOptions = {
						center: new google.maps.LatLng(43.64, -79.43),
						zoom: 12
					};
					var map = new google.maps.Map(mapCanvas, mapOptions);
				};
   