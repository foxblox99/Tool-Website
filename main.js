const calculator = document.querySelector(".calculatordiv");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__output");
const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      console.log("number key pressed");
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
        Array.from(key.parentNode.children).forEach((k) =>
          k.classList.remove("is-depressed")
        );
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    } else if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key pressed");
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";

      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    } else if (action === "clear") {
      console.log("clear key pressed");
      display.textContent = "0";
    } else if (
      action === "calculate" &&
      calculator.dataset.previousKeyType === "number"
    ) {
      console.log("equal key pressed");
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      if ((firstValue, secondValue === "69")) {
        display.textContent = "easter egg";
      } else {
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      calculator.dataset.previousKeyType = "equals";
    } else if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }
  }
});
