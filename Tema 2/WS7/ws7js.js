/*Ejer 1 code*/
function geo() {
    navigator.geolocation.watchPosition(function (position) {
            console.log("Geolocalizacion activada.");
        },
        function (error) {
            if (error.code == error.PERMISSION_DENIED)
                console.log("Geolocalizacion denegada.");
        });
}

function geoMostrar() {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
}

function geoMostrar2() {
    var id, options;

    function success(pos) {
        var crd = pos.coords;
        console.log(crd.latitude);
        console.log(crd.longitude);
        //  navigator.geolocation.clearWatch(id);
    }

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    };

    id = navigator.geolocation.watchPosition(success, error, options);
}

function getReverseGeocodingData(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': latlng}, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            var address = (results[0].formatted_address);
        }
    });
}

