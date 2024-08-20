let resultContainer = document.querySelector(".result-container");

const numberButton = document.querySelectorAll(".number");
const persenButton = document.querySelector("#persen");

let currentInput = "";
let result = [];

const reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  currentInput = "";
  result = [];
  resultContainer.innerText = 0;
});

const del = document.querySelector("#delete");

del.addEventListener("click", function () {
  if (resultContainer.innerText != 0) {
    currentInput = currentInput.slice(0, -1);
    resultContainer.innerText = result.join(" ") + " " + currentInput || 0;

if(resultContainer.innerText == 0) {
  resultContainer.innerText = 0;
}

    
  } else if (result.length > 0) {
    result.pop();
    resultContainer.innerText = result.join(" ") || 0;
  }
});

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Error: Pembagian dengan nol!";
  }

  return a / b;
}

function persen(a) {
  return a / 100;
}

function updateDisplay() {
  resultContainer.innerText = result.join(" ") + " " + currentInput || 0;
}


numberButton.forEach((button) => {
  button.addEventListener("click", function () {

    if(currentInput !== "") {

      currentInput += button.innerText;
    } else {
      currentInput = button.innerText;
    }
    updateDisplay();
  });
});

persenButton.addEventListener("click", function () {

  if(currentInput !== "") {

    currentInput = persen(parseFloat(currentInput));
    updateDisplay;}
  });
  
    
const afterNumber = document.querySelectorAll(".after-number");

afterNumber.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.innerText;

    if (buttonText == "." && currentInput !== "" && !currentInput.includes(".")) {
      currentInput += buttonText;
      updateDisplay();
    } else if (buttonText == 0 && currentInput !== "") {
      currentInput += buttonText;
      updateDisplay();
    }
  });
});

const operationButton = document.querySelectorAll(".operation");

operationButton.forEach((button) => {
  button.addEventListener("click", function () {
   
    if (currentInput !== "") {
      result.push(parseFloat(currentInput));
      currentInput = "";
      result.push(button.innerText);
    } else {
      return;
    }

    resultContainer.innerText = result.join(" ");
  });
});

const equal = document.querySelector("#equal");

equal.addEventListener("click", function () {
  if (currentInput !== "") {
    result.push(parseFloat(currentInput));
  }

  let hasil = result[0];

  for (let i = 1; i < result.length; i += 2) {
    const operator = result[i];
    const nextNumber = result[i + 1];

    switch (operator) {
      case "+":
        hasil = tambah(hasil, nextNumber);
        break;

      case "-":
        hasil = kurang(hasil, nextNumber);
        break;
      case "÷":
        hasil = bagi(hasil, nextNumber);
        break;

      case "x":
        hasil = kali(hasil, nextNumber);
        break;

      default:
        hasil = "Error: Operator tidak dikenal!";
    }
  }

  resultContainer.innerText = parseFloat(hasil.toFixed(10));

  result = [];
  currentInput = hasil.toString();
  resultContainer.innerText = hasil;
});

