// Get user's location
navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true, // Ensures high accuracy in geolocation
    timeout: 5000, // Set a timeout for location fetch
    maximumAge: 0 // Prevents using a cached location
});

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getPrayerTimes(latitude, longitude);
    getLocationName(latitude, longitude); // Get location name
}

function error(err) {
    console.error("Error fetching location: ", err);
    alert("Unable to retrieve your location. Please ensure location services are enabled.");
}

// Fetch prayer times from Aladhan API
function getPrayerTimes(latitude, longitude) {
    const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            document.getElementById("fajr-time").textContent = timings.Fajr;
            document.getElementById("dhuhr-time").textContent = timings.Dhuhr;
            document.getElementById("asr-time").textContent = timings.Asr;
            document.getElementById("maghrib-time").textContent = timings.Maghrib;
            document.getElementById("isha-time").textContent = timings.Isha;
        })
        .catch(error => console.error("Error fetching prayer times: ", error));
}

// Fetch location name using OpenCage Geocoding API
function getLocationName(latitude, longitude) {
    const apiKey = '475ff18647c3418994422ac00e43328a'; // Replace with your OpenCage API Key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const location = data.results[0].formatted; // Get the formatted address
                document.getElementById("location").textContent = ` ${location}`;
            } else {
                document.getElementById("location").textContent = "Unable to fetch location name.";
            }
        })
        .catch(error => {
            console.error("Error fetching location name: ", error);
            document.getElementById("location").textContent = "Unable to fetch location name.";
        });
}
