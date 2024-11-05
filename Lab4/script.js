const myVariantElementById = document.getElementById("my-variant-element");

// basic setup
myVariantElementById.classList.add("new-color");

const myVariantElementByQuerySelector = document.querySelector(
  "#my-variant-element-2"
);

let changedColor = false;

myVariantElementById.addEventListener("click", () => {
  myVariantElementById.classList.toggle("new-color");
  myVariantElementById.classList.toggle("change-color");
});

myVariantElementByQuerySelector.addEventListener("click", () => {
  if (!changedColor) {
    myVariantElementByQuerySelector.classList.add("change-color");
    changedColor = true;
    return;
  }
  myVariantElementByQuerySelector.classList.toggle("new-color");
  myVariantElementByQuerySelector.classList.toggle("change-color");
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
