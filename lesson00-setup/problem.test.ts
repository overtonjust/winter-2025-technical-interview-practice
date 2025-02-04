import { sayHello } from "./problem";
import {describe, expect, test} from '@jest/globals';

describe("sayHello", () => {
  test("should return 'Hello, World!'", () => {
    expect(sayHello()).toBe("Hello, World!");
  });
});
