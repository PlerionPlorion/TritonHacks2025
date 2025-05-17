const { contextBridge } = require("electron");

const api = {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
};

contextBridge.exposeInMainWorld("api", api);

if (navigator.geolocation) {
    console.log("loc success");
    navigator.geolocation.getCurrentPosition(
        (position) => {
            contextBridge.exposeInMainWorld("currentLocation", {
                currentLatitude: position.coords.latitude,
                currentLongitude: position.coords.longitude,
            });
            // console.log("Latitude : " + position.coords.latitude);
            // console.log("Longitude : " + position.coords.longitude);
        },
        (err) => {
            console.log("getting error : " + err.message);
        },
        { timeout: 10000 }
    );
} else {
    console.log("guh");
}

