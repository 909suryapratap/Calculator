
let calculation = "";
let display = document.getElementById("display");

function updateDisplay() {
  display.value = calculation || "0";
}

function one() {
  calculation += "1";
  updateDisplay();
}

function two() {
  calculation += "2";
  updateDisplay();
}

function three() {
  calculation += "3";
  updateDisplay();
}

function plus() {
  calculation += "+";
  updateDisplay();
}

function four() {
  calculation += "4";
  updateDisplay();
}

function five() {
  calculation += "5";
  updateDisplay();
}

function six() {
  calculation += "6";
  updateDisplay();
}

function seven() {
  calculation += "7";
  updateDisplay();
}

function eight() {
  calculation += "8";
  updateDisplay();
}

function nine() {
  calculation += "9";
  updateDisplay();
}

function multiply() {
  calculation += "*";
  updateDisplay();
}

function devide() {
  calculation += "/";
  updateDisplay();
}

function sub() {
  calculation += "-";
  updateDisplay();
}

function ac() {
  calculation = "";
  updateDisplay();
}

function equal() {
  try {
    calculation = eval(calculation).toString();
  } catch {
    calculation = "Error";
  }
  updateDisplay();
}

