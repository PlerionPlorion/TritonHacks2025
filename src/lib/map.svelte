<script>
    const latitude = window.currentLocation?.getLatitude();
    const longitude = window.currentLocation?.getLongitude();
    console.log(latitude, longitude);
</script>

<div>
<iframe
    title="Google Map"
    height="400px"
    class="w-full"
    loading="eager"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmAZivCpSXxUiw5UJxrilGzBdCitu030g&q={latitude}, {longitude}"
>
</iframe>
</div>
