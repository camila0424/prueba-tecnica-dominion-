import {
  calculate,
  sqrt,
  power,
  sin,
  cos,
  tan,
  roundResult,
  isValidNumber,
} from "./calculator.js";

// Referencias al HTML
const display = document.getElementById("display");
const errorMessage = document.getElementById("error-message");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

// Estado de la calculadora
let currentValue = "0";
let previousValue = "";
let operator = "";
let shouldResetDisplay = false;

// Muestra un valor en el display
function updateDisplay(value) {
  display.textContent = value;
}

// Muestra un error
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
  setTimeout(() => {
    errorMessage.classList.add("hidden");
  }, 3000);
}

// Añade una operación al historial
function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

// Maneja los botones de número y punto decimal
function handleNumber(value) {
  if (shouldResetDisplay) {
    currentValue = value;
    shouldResetDisplay = false;
  } else {
    // Evita múltiples puntos decimales
    if (value === "." && currentValue.includes(".")) return;
    currentValue = currentValue === "0" ? value : currentValue + value;
  }
  updateDisplay(currentValue);
}

// Maneja los operadores básicos (+, -, *, /)
function handleOperator(value) {
  if (operator && !shouldResetDisplay) {
    handleEquals();
  }
  previousValue = currentValue;
  operator = value;
  shouldResetDisplay = true;
}

// Calcula el resultado de la operación básica
function handleEquals() {
  if (!operator || !previousValue) return;

  try {
    const result = calculate(previousValue, operator, currentValue);
    const rounded = roundResult(result);
    const entry = `${previousValue} ${operator} ${currentValue} = ${rounded}`;
    addToHistory(entry);
    currentValue = String(rounded);
    previousValue = "";
    operator = "";
    shouldResetDisplay = true;
    updateDisplay(currentValue);
  } catch (error) {
    showError(error.message);
  }
}

// Maneja las operaciones científicas
function handleScientific(action) {
  if (!isValidNumber(currentValue)) {
    showError("Introduce un número válido primero.");
    return;
  }

  const num = parseFloat(currentValue);

  try {
    let result;
    let entry;

    if (action === "sqrt") {
      result = sqrt(num);
      entry = `√${num} = ${roundResult(result)}`;
    } else if (action === "power") {
      const exponent = prompt("Introduce el exponente:");
      if (!isValidNumber(exponent)) {
        showError("El exponente no es válido.");
        return;
      }
      result = power(num, parseFloat(exponent));
      entry = `${num}^${exponent} = ${roundResult(result)}`;
    } else if (action === "sin") {
      result = sin(num);
      entry = `sin(${num}°) = ${roundResult(result)}`;
    } else if (action === "cos") {
      result = cos(num);
      entry = `cos(${num}°) = ${roundResult(result)}`;
    } else if (action === "tan") {
      result = tan(num);
      entry = `tan(${num}°) = ${roundResult(result)}`;
    }

    addToHistory(entry);
    currentValue = String(roundResult(result));
    shouldResetDisplay = true;
    updateDisplay(currentValue);
  } catch (error) {
    showError(error.message);
  }
}

// Borra el último carácter
function handleDelete() {
  if (currentValue.length === 1 || shouldResetDisplay) {
    currentValue = "0";
  } else {
    currentValue = currentValue.slice(0, -1);
  }
  updateDisplay(currentValue);
}

// Limpia todo
function handleClear() {
  currentValue = "0";
  previousValue = "";
  operator = "";
  shouldResetDisplay = false;
  updateDisplay(currentValue);
}

// Escucha todos los botones
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (value !== undefined) {
      // Es un número u operador básico
      if (["+", "-", "*", "/"].includes(value)) {
        handleOperator(value);
      } else {
        handleNumber(value);
      }
    } else if (action) {
      // Es una acción especial
      switch (action) {
        case "clear":
          handleClear();
          break;
        case "delete":
          handleDelete();
          break;
        case "equals":
          handleEquals();
          break;
        default:
          handleScientific(action);
          break;
      }
    }
  });
});

// Borra el historial
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
