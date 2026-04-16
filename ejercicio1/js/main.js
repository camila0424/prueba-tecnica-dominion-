import {
  validateLength,
  validateOptions,
  generatePassword,
  evaluateStrength,
} from "./generator.js";

// Referencias a los elementos del HTML
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const toggleBtn = document.getElementById("toggle-btn");
const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const passwordOutput = document.getElementById("password-output");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");
const strengthLabel = document.getElementById("strength-label");
const strengthFill = document.getElementById("strength-fill");
const copyFeedback = document.getElementById("copy-feedback");

// Colores según la fuerza de la contraseña
const STRENGTH_COLORS = {
  1: "#e74c3c", // rojo — débil
  2: "#f39c12", // naranja — media
  3: "#1d9e75", // verde — fuerte
};

// Porcentaje de la barra según la fuerza
const STRENGTH_WIDTH = {
  1: "33%",
  2: "66%",
  3: "100%",
};

// Estado de visibilidad de la contraseña
let passwordVisible = false;

// Cuando se hace clic en "Generar"
generateBtn.addEventListener("click", () => {
  const length = Math.floor(Number(lengthInput.value));

  const options = {
    uppercase: uppercaseCheck.checked,
    lowercase: lowercaseCheck.checked,
    numbers: numbersCheck.checked,
    symbols: symbolsCheck.checked,
  };

  // Limpiar errores anteriores
  hideError();

  // Validar que sea un número válido
  if (isNaN(length)) {
    showError("Por favor introduce un número válido.");
    return;
  }

  // Validar longitud
  if (!validateLength(length)) {
    showError("La longitud debe estar entre 8 y 20 caracteres.");
    return;
  }

  // Validar que haya al menos una opción seleccionada
  if (!validateOptions(options)) {
    showError("Debes seleccionar al menos una opción.");
    return;
  }

  // Generar la contraseña
  const password = generatePassword(length, options);

  // Evaluar la fuerza
  const strength = evaluateStrength(password);

  // Mostrar resultados en el HTML
  passwordOutput.textContent = password;
  passwordOutput.style.filter = "blur(4px)";
  passwordVisible = false;
  toggleBtn.textContent = "👁️";

  strengthLabel.textContent = strength.label;
  strengthFill.style.width = STRENGTH_WIDTH[strength.score];
  strengthFill.style.backgroundColor = STRENGTH_COLORS[strength.score];

  // Mostrar el bloque de resultado
  result.classList.remove("hidden");
});

// Cuando se hace clic en el ojito
toggleBtn.addEventListener("click", () => {
  passwordVisible = !passwordVisible;

  if (passwordVisible) {
    passwordOutput.style.filter = "none";
    toggleBtn.textContent = "🙈";
  } else {
    passwordOutput.style.filter = "blur(4px)";
    toggleBtn.textContent = "👁️";
  }
});

// Cuando se hace clic en "Copiar"
copyBtn.addEventListener("click", () => {
  const password = passwordOutput.textContent;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    copyFeedback.classList.remove("hidden");
    setTimeout(() => {
      copyFeedback.classList.add("hidden");
    }, 2000);
  });
});

// Muestra un mensaje de error
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
  result.classList.add("hidden");
}

// Oculta el mensaje de error
function hideError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}
