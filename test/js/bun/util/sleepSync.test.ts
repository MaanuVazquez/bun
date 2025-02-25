import { it, expect } from "bun:test";
import { sleepSync } from "bun";

it("sleepSync uses milliseconds", async () => {
  const start = Date.now();
  sleepSync(5);
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(5);
  expect(end - start).toBeLessThan(10);
});

it("sleepSync with no arguments throws", async () => {
  // @ts-expect-error
  expect(() => sleepSync()).toThrow();
});

it("sleepSync with non-numbers throws", async () => {
  const invalidValues = [true, false, "hi", {}, [], undefined, null] as any[];
  for (const v of invalidValues) {
    expect(() => sleepSync(v)).toThrow();
  }
});

it("sleepSync with negative number throws", async () => {
  expect(() => sleepSync(-10)).toThrow();
});

it("can map with sleepSync", async () => {
  [1, 2, 3].map(sleepSync);
});
