// disable form after submission
window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#rsvp form");

    if (!form) return;

    // If already submitted on this device
    if (localStorage.getItem("rsvpSubmitted") === "true") {
        disableForm();
    }

    // On submit
    form.addEventListener("submit", () => {

        localStorage.setItem("rsvpSubmitted", "true");
        disableForm();

        // let Formspree request complete safely
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 2000);

    });

    function disableForm() {
        const inputs = form.querySelectorAll("input, button");

        inputs.forEach(el => {
            el.disabled = true;
            el.style.opacity = "0.5";
            el.style.cursor = "not-allowed";
        });
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