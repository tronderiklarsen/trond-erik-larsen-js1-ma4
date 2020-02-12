const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const form = document.querySelector("#contactForm");

const firstNameLength = firstName.length;

form.addEventListener("submit", checkLength);

function checkLength(event) {

    event.preventDefault();

    console.log("The form was submitted");

    if (firstNameLength >= 2) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}