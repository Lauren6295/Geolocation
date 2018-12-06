
//************** Coordinates ********************************

let x = document.getElementById("coordinates");

    function prueba() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }
    

    let coordinates = document.getElementById('coordinates');
    coordinates.addEventListener('click', prueba);