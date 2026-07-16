/* ==========================================
   WDD 131 - Place Assignment
   place.js
========================================== */

/* -----------------------------
   Footer Information
------------------------------ */

// Display the current year
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

// Display the last modified date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


/* -----------------------------
   Weather Information
------------------------------ */

// Temperature in Celsius
const temperature = 30;

// Wind speed in km/h
const windSpeed = 8;


// Function to calculate wind chill
function calculateWindChill(temp, speed) {

    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);

}


// Display Wind Chill
const windChill = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {

    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;

} else {

    windChill.textContent = "N/A";

}