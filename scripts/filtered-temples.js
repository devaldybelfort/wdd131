// ==========================================
// TEMPLE ARRAY
// ==========================================

const temples = [

    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // ---------- Added Temples ----------

    {
        templeName: "Port-au-Prince Haiti",
        location: "Port-au-Prince, Haiti",
        dedicated: "2019, September, 1",
        area: 10800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/01-Port-au-Prince-Haiti-Temple-2264538.jpg"
    },

    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    },

    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/320x180/NorthBirdsEye.jpg"
    }

];


// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");


// ==========================================
// DISPLAY TEMPLES
// ==========================================

function displayTemples(templeList) {

    gallery.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        const name = document.createElement("figcaption");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        gallery.appendChild(card);

    });

}


// ==========================================
// NAVIGATION BUTTONS
// ==========================================

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


// ==========================================
// HOME
// ==========================================

homeLink.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Home";

    displayTemples(temples);

});


// ==========================================
// OLD TEMPLES
// Built before 1900
// ==========================================

oldLink.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter((temple) => {

        const year = parseInt(temple.dedicated);

        return year < 1900;

    });

    displayTemples(oldTemples);

});


// ==========================================
// NEW TEMPLES
// Built after 2000
// ==========================================

newLink.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter((temple) => {

        const year = parseInt(temple.dedicated);

        return year > 2000;

    });

    displayTemples(newTemples);

});


// ==========================================
// LARGE TEMPLES
// Area greater than 90,000
// ==========================================

largeLink.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter((temple) => {

        return temple.area > 90000;

    });

    displayTemples(largeTemples);

});


// ==========================================
// SMALL TEMPLES
// Area smaller than 10,000
// ==========================================

smallLink.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter((temple) => {

        return temple.area < 10000;

    });

    displayTemples(smallTemples);

});


// ==========================================
// DISPLAY ALL TEMPLES WHEN PAGE LOADS
// ==========================================

displayTemples(temples);


// ==========================================
// HAMBURGER MENU
// ==========================================

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {

        menuButton.textContent = "✖";

    } else {

        menuButton.textContent = "☰";

    }

});


// ==========================================
// FOOTER - CURRENT YEAR
// ==========================================

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// ==========================================
// FOOTER - LAST MODIFIED
// ==========================================

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;