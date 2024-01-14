const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // nothing happens if form is not validated
    if (!validateForm(form)) return;

    //if form is submited
    alert("Your message was sent succesfully")
});

const validateForm = (form) => {
    let valid = true;
    //check for empty input fields
    let name = form.querySelector(".name");
    let message = form.querySelector(".message");
    let email = form.querySelector(".email");

    if (name.value === "") {
        giveError(name, "Please enter your name");
        valid = false;
    }
    if (message.value === "") {
        giveError(message, "Please enter a message");
        valid = false;
    }

    //validate email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailValue = email.value;

    if (!emailRegex.test(emailValue)) {
        giveError(email, "Please enter a valid email");
        valid = false;
    }

    // if valid return true
    if (valid) {
        return true;
    }
};

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");

    //if error message already exist remove it
    let existingError = parentElement.querySelector(".error-msg");
    if (existingError) {
        existingError.remove();
    }

    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("error-msg");
    parentElement.appendChild(error);
};

// remove error on input

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

let allFields = [...inputs, ...textareas];

allFields.forEach((field) => {
    field.addEventListener("input", () => {
        removeError(field);
    })
});

const removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove("error");
    let error = parentElement.querySelector(".error-msg");
    if (error) {
        error.remove();
    }
};