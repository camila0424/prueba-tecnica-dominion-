// Caracteres disponibles para cada opción
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Valida que la longitud esté entre 8 y 20
function validateLength(length) {
  return length >= 8 && length <= 20;
}

// Valida que al menos una opción esté seleccionada
function validateOptions(options) {
  return (
    options.uppercase || options.lowercase || options.numbers || options.symbols
  );
}

// Construye el conjunto de caracteres según las opciones elegidas
function buildCharset(options) {
  let charset = "";
  if (options.uppercase) charset += UPPERCASE;
  if (options.lowercase) charset += LOWERCASE;
  if (options.numbers) charset += NUMBERS;
  if (options.symbols) charset += SYMBOLS;
  return charset;
}

// Genera la contraseña con la longitud y opciones dadas
function generatePassword(length, options) {
  const charset = buildCharset(options);
  let password = "";

  // Asegura que haya al menos un carácter de cada tipo seleccionado
  if (options.uppercase)
    password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
  if (options.lowercase)
    password += LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
  if (options.numbers)
    password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  if (options.symbols)
    password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  // Rellena el resto hasta alcanzar la longitud deseada
  for (let i = password.length; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  // Mezcla los caracteres para que no siempre empiece igual
  return shuffleString(password);
}

// Mezcla aleatoriamente los caracteres de un string
function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Evalúa la fuerza de la contraseña
// Devuelve: { label: 'débil' | 'media' | 'fuerte', score: 1 | 2 | 3 }
function evaluateStrength(password) {
  let score = 0;

  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: "débil", score: 1 };
  if (score <= 3) return { label: "media", score: 2 };
  return { label: "fuerte", score: 3 };
}

// Exportamos las funciones para poder usarlas en los tests
export {
  validateLength,
  validateOptions,
  generatePassword,
  evaluateStrength,
  buildCharset,
  shuffleString,
};
