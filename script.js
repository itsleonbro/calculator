const screen = document.getElementById("screen");

function displayToScreen(input) {
  screen.value += input;
}

function clearDisplay() {
  screen.value = "";
}

function deleteOneValue() {
  // get the current value of the display
  const currentValue = screen.value;

  // removes the last character if there's any
  if (currentValue.length > 0) {
    screen.value = currentValue.slice(0, -1);
  }
}
