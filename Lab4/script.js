const myVariantElement = document.getElementById("my-variant-element");
console.log(myVariantElement); // Check if this logs the element correctly

myVariantElement.classList.add("new-color");

const myVariantElementByQuerySelector = document.querySelector(
  "#my-variant-element"
);

let changedColor = false;

myVariantElementByQuerySelector.addEventListener("click", () => {
  if (changedColor) {
    myVariantElementByQuerySelector.classList.remove("new-color");
    myVariantElementByQuerySelector.classList.add("change-color");
    changedColor = false;
  } else {
    myVariantElementByQuerySelector.classList.remove("change-color");
    myVariantElementByQuerySelector.classList.add("new-color");
    changedColor = true;
  }
  // or, if you want to toggle the class:
  //   myVariantElementByQuerySelector.classList.toggle("new-color");
  //   myVariantElementByQuerySelector.classList.toggle("change-color");
});

const addButton = document.getElementById("add-button");
const reduceButton = document.getElementById("reduce-button");
const increaseButton = document.getElementById("increase-button");
const deleteButton = document.getElementById("delete-button");

const image = document.getElementById("image");
let isImageVisible = true;
let imageWidth = 700;

// basic setup
addButton.classList.add("disabled");
image.style.width = imageWidth + "px";

addButton.addEventListener("click", () => {
  image.classList.remove("hide");
  addButton.classList.add("disabled");
  reduceButton.classList.remove("disabled");
  increaseButton.classList.remove("disabled");
  deleteButton.classList.remove("disabled");
});

reduceButton.addEventListener("click", () => {
  imageWidth -= 100;
  if (imageWidth < 100) {
    imageWidth = 100;
  }
  image.style.width = imageWidth + "px";
});

increaseButton.addEventListener("click", () => {
  imageWidth += 100;
  image.style.width = imageWidth + "px";
});

deleteButton.addEventListener("click", () => {
  image.classList.add("hide");
  addButton.classList.remove("disabled");
  reduceButton.classList.add("disabled");
  increaseButton.classList.add("disabled");
  deleteButton.classList.add("disabled");
});
