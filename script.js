const screen = document.getElementById("screen");

function displayToScreen(input) {
  screen.value += input;
}

function clearDisplay() {
  screen.value = "";
}

