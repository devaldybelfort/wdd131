// =======================
// Navigation Menu
// =======================

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

function toggleMenu() {
    navigation.classList.toggle("open");
}

menuButton.addEventListener("click", toggleMenu);

// =======================
// Footer
// =======================

function updateFooter() {

    document.querySelector("#currentyear").textContent =
        new Date().getFullYear();

    document.querySelector("#lastModified").textContent =
        `Last Modified: ${document.lastModified}`;

}

updateFooter();

// =======================
// Booking Form
// =======================

const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", saveBooking);

}

function saveBooking(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const service = document.querySelector("#service").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        service === "" ||
        date === "" ||
        time === ""
    ) {

        document.querySelector("#bookingMessage").textContent =
            "Please complete all fields.";

        return;
    }

    const booking = {
        name,
        email,
        phone,
        service,
        date,
        time
    };

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    bookings.forEach(function (appointment) {

        console.log(
            `${appointment.name} booked ${appointment.service}`
        );

    });

    document.querySelector("#bookingMessage").textContent =
        `Thank you ${name}! Your ${service} appointment has been booked for ${date} at ${time}.`;

    bookingForm.reset();

}