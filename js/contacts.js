const form = document.querySelector("#form");
const username = document.querySelector("#username");
const company = document.querySelector("#company");
const phone = document.querySelector("#telephone");
const email = document.querySelector("#email");
console.log(form, username, company, phone, email);
//shows message when there is error
function showError(input, message) {
  const contactForm = input.parentElement;
  contactForm.className = "contact-boxes error";
  const small = contactForm.querySelector("small");
  small.innerText = message;
}

//show success message when all of thing are correct
function showSuccess(input) {
  const contactForm = input.parentElement;
  contactForm.className = "contact-boxes success";
}

//Check email valid or not
function checkEmail(input) {
  const regCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regCheck.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is invalid, please try again!");
  }
}

//check required fields
function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() == "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check inputed value length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//check telephone is number
function checkPhone(input) {
  if (typeof input.value.trim() === "number") {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} must be valid phone number!`);
  }
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//form event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkPhone(phone);
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(company, 6, 25);
  checkLength(phone, 7, 12);
  checkRequired([username, email, phone, company]);
});
