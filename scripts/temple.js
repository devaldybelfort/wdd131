// Select HTML elements
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");


// Hamburger menu function
menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");


    if (navigation.classList.contains("show")) {

        menuButton.textContent = "X";

    } else {

        menuButton.textContent = "☰";

    }

});


// Current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Last modified date

document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;