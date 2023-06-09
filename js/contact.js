const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    //console.log("Hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkIfButtonIsDisabled() {
    if (checkLength(firstName.value, 0) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(address.value, 24)) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}

firstName.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
address.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = `<div class="message">Your message has been sent</div>`;
    form.reset();
}

form.addEventListener("submit", submitForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


