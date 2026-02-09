const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

function getWeatherData(city, callback) {
    // Q5 : ajout de units=metric et lang=fr
    const url =
        BASE_URL +
        "?appid=" + API_KEY +
        "&q=" + city +
        "&units=metric" + //température en degrés Celsius
        "&lang=fr"; //description météo en fr

    fetch(url)
        .then((res) => res.json())
        .then((weatherData) => callback(null, weatherData))
        .catch((error) => callback(error, null));
}

getWeatherData("Sousse", (error, data) => {
    if (error) {
        console.error("Erreur:", error.message);

    } else {

        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidite = data.main.humidity;

        console.log("=== Météo à Sousse ===");
        console.log("Description :", description);   // en français
        console.log("Température :", temperature, "°C"); // en Celsius
        console.log("Humidité    :", humidite, "%");
    }
});
