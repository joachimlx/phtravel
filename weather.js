fetch('https://api.openweathermap.org/data/2.5/weather?lang=en&q=manila&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')
    // Muunnetaan vastaus JSON muotoon
     .then(function (response) {
    return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
    // kutsutaan saa-funktiota
    saa(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function saa(data) {

    let teksti = "";

    let kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    teksti = teksti + "<h3>" + data.name + "</h3>";

    teksti = teksti + "<p>Description: " + data.weather[0].description + "</p>";

    teksti = teksti + "<p>Temperature: " + data.main.temp + " °C</p>";

    teksti = teksti + "<p>Wind speed: " + data.wind.speed + " m/s</p>";

    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva'></p><br><br>";

    document.getElementById("vastaus").innerHTML = teksti;
}

fetch('https://api.openweathermap.org/data/2.5/weather?lang=en&q=cebu&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')
    // Muunnetaan vastaus JSON muotoon
     .then(function (response) {
    return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
    // kutsutaan saa-funktiota
    saa2(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function saa2(data) {

    let teksti = "";

    let kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    teksti = teksti + "<h3>" + data.name + "</h3>";

    teksti = teksti + "<p>Description: " + data.weather[0].description + "</p>";

    teksti = teksti + "<p>Temperature: " + data.main.temp + " °C</p>";

    teksti = teksti + "<p>Wind speed: " + data.wind.speed + " m/s</p>";

    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva'></p><br><br>";

    document.getElementById("vastaus2").innerHTML = teksti;
}

fetch('https://api.openweathermap.org/data/2.5/weather?lang=en&q=davao%20city&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')
    // Muunnetaan vastaus JSON muotoon
     .then(function (response) {
    return response.json();
    })
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
    // kutsutaan saa-funktiota
    saa3(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus3").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function saa3(data) {

    let teksti = "";

    let kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    teksti = teksti + "<h3>" + data.name + "</h3>";

    teksti = teksti + "<p>Description: " + data.weather[0].description + "</p>";

    teksti = teksti + "<p>Temperature: " + data.main.temp + " °C</p>";

    teksti = teksti + "<p>Wind speed: " + data.wind.speed + " m/s</p>";

    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva'></p><br><br>";

    document.getElementById("vastaus3").innerHTML = teksti;
}