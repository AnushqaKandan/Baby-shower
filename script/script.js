// disable form after submission
// RSVP form
window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#rsvp form");

    if (!form) return;

    // If already submitted on this device, disable the form
    if (localStorage.getItem("rsvpSubmitted") === "true") {
        disableForm();
    }

    form.addEventListener("submit", () => {

        // Prevent multiple clicks while submitting
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        // Remember submission for future visits
        localStorage.setItem("rsvpSubmitted", "true");

        // IMPORTANT:
        // Do NOT disable the whole form here.
        // Do NOT redirect yet.
        // We first want to confirm Formspree receives the data correctly.
    });

    function disableForm() {
        const inputs = form.querySelectorAll("input, button");

        inputs.forEach(input => {
            input.disabled = true;
        });

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.textContent = "RSVP Already Submitted 💕";
    }

});



// rsvp button show/hide on scroll
const button = document.querySelector(".floating-rsvp");
const rsvpSection = document.querySelector(".rsvp-section");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // show after scrolling 200px
    if (scrollY > 200) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }

    // hide when RSVP section is in view
    const rsvpTop = rsvpSection.getBoundingClientRect().top;

    if (rsvpTop < window.innerHeight / 2) {
        button.classList.add("hide");
    } else {
        button.classList.remove("hide");
    }
});