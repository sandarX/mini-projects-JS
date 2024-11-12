import "./style.css";

const display = document.getElementById("display");
export const addToDisplay = (input) => {
  display.value += input;
};

export const del = () => {
  display.value = display.value.slice(0, -1);
};

export const calculate = () => {
   try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

export const clearDisplay = () => {
  display.value = "";
};
