const axios = require("axios");

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

function getWeatherData(city, callback) {
    const url =
        BASE_URL +
        "?appid=" + API_KEY +
        "&q=" + city +
        "&units=metric" +
        "&lang=fr";

    axios
        .get(url)
        .then((response) => callback(null, response.data))
        .catch((error) => callback(error, null));
}

getWeatherData("Sousse", (error, data) => {
    if (error) {
        console.error("Erreur:", error.message);
    } else {
        console.log("Description :", data.weather[0].description);
        console.log("Température :", data.main.temp, "°C");
        console.log("Humidité    :", data.main.humidity, "%");
    }
});
