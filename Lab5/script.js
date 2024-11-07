const task1 = () => {
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
};

const task2 = () => {
  const gridSize = 6;
  const variantNumber = 7;

  function createTable() {
    const table = document.getElementById("grid");
    let cellNumber = 1;

    for (let i = 0; i < gridSize; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("td");
        cell.textContent = cellNumber;

        if (cellNumber === variantNumber) {
          cell.addEventListener("mouseover", (e) =>
            handleMouseOver(e, cellNumber)
          );
          cell.addEventListener("click", (e) => handleClick(e, cellNumber));
          cell.addEventListener("dblclick", (e) => handleDoubleClick(e));
        }
        row.appendChild(cell);
        cellNumber++;
      }
      table.appendChild(row);
    }
  }

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function handleMouseOver(event) {
    event.target.style.backgroundColor = getRandomColor();
  }

  function handleClick(event) {
    const color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
  }

  function handleDoubleClick(event) {
    const selectedCell = event.target;
    const startRow = selectedCell.parentNode.rowIndex;
    const color = document.getElementById("colorPicker").value;

    const table = document.getElementById("grid");

    for (let i = startRow; i < gridSize; i += 2) {
      const row = table.rows[i];
      for (let cell of row.cells) {
        cell.style.backgroundColor = color;
      }
    }
  }

  createTable();
};

task1();
task2();
