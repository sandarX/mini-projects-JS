import "./style.css";

const display = document.getElementById("display");
export const addToDisplay = (input) => {
  display.value += input;
};

export const del = () => {
  display.value = display.value.slice(0, -1);
};

export const calculate = () => {
  display.value = eval(display.value);
};

export const clearDisplay = () => {
  display.value = "";
};
