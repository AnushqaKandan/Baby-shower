// localStorage.setItem("rsvpSubmitted", "true");
// if (localStorage.getItem("rsvpSubmitted")) {
//     // Disable the form
// }

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