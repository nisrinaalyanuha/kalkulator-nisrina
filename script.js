let display = document.getElementById("display");

function appendValue(val) {
  if (display.textContent === "0") {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}
