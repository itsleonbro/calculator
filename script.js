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

  // removes the last character if its numbers, if its string it erases all
  if (currentValue.length > 0 && !isNaN(currentValue)) {
    screen.value = currentValue.slice(0, -1);
  } else screen.value = "";
}

function calculateResult() {
  if (screen.value) {
    try {
      screen.value = eval(screen.value);
    } catch (error) {
      screen.value = "Oops";
    }
  }
}
