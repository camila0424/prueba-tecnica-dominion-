import { describe, it, expect } from "vitest";
import {
  validateLength,
  validateOptions,
  generatePassword,
  evaluateStrength,
} from "../js/generator.js";

describe("validateLength", () => {
  it("devuelve true si la longitud está entre 8 y 20", () => {
    expect(validateLength(12)).toBe(true);
  });

  it("devuelve true si la longitud es 8 (mínimo)", () => {
    expect(validateLength(8)).toBe(true);
  });

  it("devuelve true si la longitud es 20 (máximo)", () => {
    expect(validateLength(20)).toBe(true);
  });

  it("devuelve false si la longitud es menor que 8", () => {
    expect(validateLength(5)).toBe(false);
  });

  it("devuelve false si la longitud es mayor que 20", () => {
    expect(validateLength(25)).toBe(false);
  });
});

describe("validateOptions", () => {
  it("devuelve true si al menos una opción está seleccionada", () => {
    expect(
      validateOptions({
        uppercase: true,
        lowercase: false,
        numbers: false,
        symbols: false,
      }),
    ).toBe(true);
  });

  it("devuelve false si ninguna opción está seleccionada", () => {
    expect(
      validateOptions({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
      }),
    ).toBe(false);
  });
});

describe("generatePassword", () => {
  it("genera una contraseña con la longitud correcta", () => {
    const options = {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
    };
    expect(generatePassword(12, options)).toHaveLength(12);
  });

  it("genera una contraseña que contiene mayúsculas si se selecciona la opción", () => {
    const options = {
      uppercase: true,
      lowercase: false,
      numbers: false,
      symbols: false,
    };
    const password = generatePassword(10, options);
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  it("genera una contraseña que contiene números si se selecciona la opción", () => {
    const options = {
      uppercase: false,
      lowercase: false,
      numbers: true,
      symbols: false,
    };
    const password = generatePassword(10, options);
    expect(/[0-9]/.test(password)).toBe(true);
  });

  it("genera una contraseña que contiene símbolos si se selecciona la opción", () => {
    const options = {
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: true,
    };
    const password = generatePassword(10, options);
    expect(/[^A-Za-z0-9]/.test(password)).toBe(true);
  });
});

describe("evaluateStrength", () => {
  it("devuelve débil para una contraseña corta con pocos tipos", () => {
    const result = evaluateStrength("abc12");
    expect(result.label).toBe("débil");
  });

  it("devuelve fuerte para una contraseña larga con todos los tipos", () => {
    const result = evaluateStrength("Abcde123!@#");
    expect(result.label).toBe("fuerte");
  });

  it("devuelve un score entre 1 y 3", () => {
    const result = evaluateStrength("Abcde123!@#");
    expect(result.score).toBeGreaterThanOrEqual(1);
    expect(result.score).toBeLessThanOrEqual(3);
  });
});
