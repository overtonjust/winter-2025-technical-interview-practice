const isValid = require("./problem");
import {describe, test, expect } from '@jest/globals';

describe("isValid", () => {
  // Simple cases
  test("empty string should return true", () => {
    expect(isValid("")).toBe(true);
  });

  test("single pair of parentheses", () => {
    expect(isValid("()")).toBe(true);
  });

  test("mismatched pair of brackets", () => {
    expect(isValid("((")).toBe(false);
  });
});
