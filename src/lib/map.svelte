<script>
    const x = document.getElementById("index");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function success(position) {
        x.innerHTML =
            "Latitude: " +
            position.coords.latitude +
            "<br>Longitude: " +
            position.coords.longitude;
    }

    function error() {
        alert("Sorry, no position available.");
    }
    getLocation();
</script>

<div>
<iframe
    title="Google Map"
    height="400px"
    style="width:100%"
    loading="eager"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmAZivCpSXxUiw5UJxrilGzBdCitu030g&q=${position.coords.latitude}, ${position.coords.longitude}"
>
</iframe>
</div>
