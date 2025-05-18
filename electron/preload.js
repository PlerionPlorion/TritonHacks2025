let lat = null;
let lon = null;

// Kick off geolocation immediately
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        },
        (err) => {
            console.log("Geolocation error:", err.message);
        },
        { timeout: 10000 }
    );
} else {
    console.log("Geolocation not supported");
}

// Expose getter functions synchronously
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld("currentLocation", {
    getLatitude: () => lat,
    getLongitude: () => lon
});
