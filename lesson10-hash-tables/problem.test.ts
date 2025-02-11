import {describe, test, expect } from "@jest/globals";
import { twoSum, twoSumMap } from "./problem";

describe('twoSum function', () => {
  test('returns correct indices for a valid pair', () => {
    expect(twoSumMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('returns correct indices when numbers appear later in the array', () => {
    expect(twoSumMap([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('handles negative numbers correctly', () => {
    expect(twoSumMap([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('works with duplicate numbers', () => {
    expect(twoSumMap([3, 3], 6)).toEqual([0, 1]);
  });

  test('returns indices in any valid order', () => {
    const result = twoSumMap([1, 5, 3, 9], 8);
    expect(result.sort()).toEqual([1, 2]);
  });
});
