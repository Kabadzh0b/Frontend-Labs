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
