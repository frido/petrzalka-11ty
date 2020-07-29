window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation)
    } else {
        alert("no support");
    }
}

function displayLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var div = document.getElementById("location");
    div.innerHTML = "position lat:" + lat + ", lon:" + lon;
}