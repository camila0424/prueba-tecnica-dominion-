// Valida si un valor es un número válido
function isValidNumber(value) {
  return !isNaN(value) && value !== "" && value !== null;
}

// Suma
function add(a, b) {
  return a + b;
}

// Resta
function subtract(a, b) {
  return a - b;
}

// Multiplicación
function multiply(a, b) {
  return a * b;
}

// División — evita división por cero
function divide(a, b) {
  if (b === 0) throw new Error("No se puede dividir por cero");
  return a / b;
}

// Raíz cuadrada — evita raíz de número negativo
function sqrt(a) {
  if (a < 0)
    throw new Error("No se puede calcular la raíz de un número negativo");
  return Math.sqrt(a);
}

// Potencia
function power(a, b) {
  return Math.pow(a, b);
}

// Seno — recibe grados y convierte a radianes
function sin(a) {
  return Math.sin((a * Math.PI) / 180);
}

// Coseno — recibe grados y convierte a radianes
function cos(a) {
  return Math.cos((a * Math.PI) / 180);
}

// Tangente — recibe grados y convierte a radianes
function tan(a) {
  return Math.tan((a * Math.PI) / 180);
}

// Ejecuta la operación básica según el operador
function calculate(a, operator, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error("Los valores introducidos no son válidos");
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      throw new Error("Operador no válido");
  }
}

// Redondea el resultado para evitar decimales largos
function roundResult(value) {
  return Math.round(value * 1e10) / 1e10;
}

export {
  isValidNumber,
  add,
  subtract,
  multiply,
  divide,
  sqrt,
  power,
  sin,
  cos,
  tan,
  calculate,
  roundResult,
};
