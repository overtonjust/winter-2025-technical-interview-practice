import { describe, test, expect } from "@jest/globals";
const removeDuplicates = require("./problem");

test("Returns correct array with duplicates removed", () => {
  expect(removeDuplicates([1, 2, 3, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("Returns correct array with duplicates removed", () => {
  expect(removeDuplicates([1, 1, 1, 1, 1, 1])).toEqual([1]);
});

test("Returns correct array with duplicates removed", () => {
  expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("Returns correct array with duplicates removed", () => {
  expect(removeDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});
