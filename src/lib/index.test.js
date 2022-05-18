import { sum } from "./index";

test("faccio una prova di 1+1", () => {
  expect(sum(1, 1)).toBe(2);
});

test("che non funzioni con le stringhe", () => {
  expect(sum(1, "1")).not.toBe(2);
  expect(typeof sum(1, "1")).toBe("string");
});
