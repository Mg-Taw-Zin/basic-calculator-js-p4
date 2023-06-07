const button = document.querySelectorAll("button");
const input = document.querySelector("#result");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    const buttonValue = button[i].textContent;
    console.log(buttonValue);
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  input.value = "";
}
function calculateResult() {
  input.value = eval(input.value);
}
function appendValue(buttonValue) {
  input.value += buttonValue;
}
