<script>
    const latitude = currentLocation.currentLatitude;
    const longitude = currentLocation.currentLongitude;
    console.log(latitude, longitude);
</script>

<div>
<iframe
    title="Google Map"
    height="400px"
    style="width:100%"
    loading="eager"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmAZivCpSXxUiw5UJxrilGzBdCitu030g&q={latitude}, {longitude}"
>
</iframe>
</div>
