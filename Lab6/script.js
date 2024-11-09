const cards = document.querySelector(".cards");
const download = document.querySelector(".download");

const fetchData = async () => {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  return data.results[0];
};

const createUserUI = (userData) => {
  const skip = document.createElement("br");

  const userUI = document.createElement("div");
  userUI.classList.add("card");

  const image = document.createElement("img");
  image.src = userData.picture.large;

  const cell = document.createElement("p");
  cell.classList.add("cell");
  const cellLabel = document.createTextNode("Cell: ");
  const cellText = document.createTextNode(userData.cell);
  cell.appendChild(cellLabel);
  cell.appendChild(skip);
  cell.appendChild(cellText);

  const city = document.createElement("p");
  city.classList.add("city");
  const cityLabel = document.createTextNode("City: ");
  const cityText = document.createTextNode(userData.location.city);
  city.appendChild(cityLabel);
  city.appendChild(skip);
  city.appendChild(cityText);

  const postcode = document.createElement("p");
  postcode.classList.add("postcode");
  const postcodeLabel = document.createTextNode("Postcode: ");
  const postcodeText = document.createTextNode(userData.location.postcode);
  postcode.appendChild(postcodeLabel);
  postcode.appendChild(skip);
  postcode.appendChild(postcodeText);

  const email = document.createElement("p");
  email.classList.add("email");
  const emailLabel = document.createTextNode("Email: ");
  const emailText = document.createTextNode(userData.email);
  email.appendChild(emailLabel);
  email.appendChild(skip);
  email.appendChild(emailText);

  userUI.append(image, cell, city, postcode, email);
  cards.append(userUI);
};

download.addEventListener("click", async () => {
  download.disabled = true;
  const userData = await fetchData();
  createUserUI(userData);
  download.disabled = false;
});
