import * as Math from "../Math"

test('clamp', () => {
  expect(Math.clamp(5, 0, 10)).toBe(5)
  expect(Math.clamp(20, 0, 10)).toBe(10)
  expect(Math.clamp(-30, 0, 10)).toBe(0)
  expect(Math.clamp(-15, -20, -10)).toBe(-15)
  expect(Math.clamp(5, -20, -10)).toBe(-10)
  expect(Math.clamp(-50, -20, -10)).toBe(-20)
  expect(Math.clamp(25, 20, 50)).toBe(25)
  expect(Math.clamp(-10, 20, 50)).toBe(20)
  expect(Math.clamp(75, 25, 50)).toBe(50)
})

test('moveTowards', () => {
  expect(Math.moveTowards(0, 10, 5)).toBe(5)
  expect(Math.moveTowards(0, 10, 0)).toBe(0)
  expect(Math.moveTowards(0, 10, 10000)).toBe(10)
  expect(Math.moveTowards(0, 10, -1)).toBe(0)
  expect(Math.moveTowards(20, 10, 2)).toBe(18)
  expect(Math.moveTowards(20, 10, 30)).toBe(10)
  expect(Math.moveTowards(-20, -30, 5)).toBe(-25)
})

test('lerp', () => {
  expect(Math.lerp(5, 10, 0.5)).toBeCloseTo(7.5)
  expect(Math.lerp(5, 10, 0)).toBeCloseTo(5)
  expect(Math.lerp(5, 10, 1)).toBeCloseTo(10)
  expect(Math.lerp(10, 5, 0.5)).toBeCloseTo(7.5)
  expect(Math.lerp(10, 5, 0)).toBeCloseTo(10)
  expect(Math.lerp(10, 5, 1)).toBeCloseTo(5)
  expect(Math.lerp(-10, -20, 1)).toBeCloseTo(-20)
  expect(Math.lerp(-10, -20, 0.25)).toBeCloseTo(-12.5)
  expect(Math.lerp(-10, -20, 0.5)).toBeCloseTo(-15)
  expect(Math.lerp(-10, -20, 0.75)).toBeCloseTo(-17.5)
})