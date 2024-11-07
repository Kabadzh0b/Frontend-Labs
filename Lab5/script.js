const form = document.querySelector("form");

const nameInput = document.querySelector("[name=Name]");
const variantInput = document.querySelector("[name=Variant]");
const phoneInput = document.querySelector("[name=Phone]");
const facultyInput = document.querySelector("[name=Faculty]");
const addressInput = document.querySelector("[name=Address]");

const allInputs = document.querySelectorAll("input");

const validators = {
  name: (value) => /^[А-ЯІЇЄҐ]{2,} [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/.test(value),
  variant: (value) => /^\d{2}$/.test(value),
  phone: (value) => /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(value),
  faculty: (value) => /^[А-ЯІЇЄҐ]{4}$/.test(value),
  address: (value) => /^м\. [А-ЯІЇЄҐ]{3,}$/.test(value),
};

const inputs = {
  name: nameInput,
  variant: variantInput,
  phone: phoneInput,
  faculty: facultyInput,
  address: addressInput,
};

function validateField(fieldName, input) {
  if (validators[fieldName]) {
    const isValid = validators[fieldName](input?.value);
    if (!isValid) {
      input?.classList.add("error");
    } else {
      input?.classList.remove("error");
    }
    return isValid;
  }
  return false;
}

allInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.classList.remove("error");
  });
});

const isFormValid = () => {
  let valid = true;
  for (const field in inputs) {
    const isValid = validateField(field, inputs[field]);
    if (!isValid) {
      valid = false;
    }
  }
  return valid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormValid()) {
    alert("Ваш запис було успішно записано!");
  }
});
