function initMap(){
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                {lat: 40.785091, lng: -73.968285},
                {lat: 41.084045, lng: -73.874245},
                {lat: 40.754932, lng: -73.984016}
            ];
            //iterate over locations and apply markers to them
            //The map() method creates a new array with the results of calling a provided function on every element in the calling array. This has nothing to do with the API, it's a standard JS method! The function we give it is basically like a for each loop: we pass in a location and an index and return a new google marker. Location is the lng and lat.
            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            //gives us an image for the marker- taken from google maps API page
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }