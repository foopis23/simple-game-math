import * as Vector2 from '../Vector2';

const test1 = {
  x: 0,
  y: 0
}

const test2 = {
  x: 5,
  y: 10
}

const test3 = {
  x: 5000.99114,
  y: 3000.123
}

const test4 = {
  x: -300,
  y: 200
}

const test5 = {
  x: -600,
  y: -500
}

test('Distance', () => {
  expect(Vector2.distance(test1, test1)).toBe(0)
  expect(Vector2.distance(test2, test2)).toBe(0)
  expect(Vector2.distance(test3, test3)).toBe(0)

  expect(Vector2.distance(test2, test1)).toBeCloseTo(11.180339887498949)

  expect(Vector2.distance(test5, test3)).toBeCloseTo(6604.692481)
  expect(Vector2.distance(test5, test4)).toBeCloseTo(761.577311)
})

test('Dot Product', () => {
  expect(Vector2.dot(test1, test1)).toBe(0)
  expect(Vector2.dot(test2, test2)).toBe(125)

  expect(Vector2.dot(test4, test5)).toBe(80000)

  expect(Vector2.dot(test3, test3)).toBeCloseTo(34010650.397487)
})


test('Magnitude', () => {
  expect(Vector2.mag(test1)).toBe(0);
  expect(Vector2.mag(test2)).toBeCloseTo(11.180339887498949)
  expect(Vector2.mag(test3)).toBeCloseTo(5831.865087387353)
  expect(Vector2.mag(test4)).toBeCloseTo(360.5551275463989)
  expect(Vector2.mag(test5)).toBeCloseTo(781.0249675906655)
})

test('Normalize', () => {
  const norm1 = Vector2.normalize(test1)
  const norm2 = Vector2.normalize(test2)
  const norm3 = Vector2.normalize(test3)
  const norm4 = Vector2.normalize(test4)
  const norm5 = Vector2.normalize(test5)

  expect(norm1.x).toBe(0)
  expect(norm1.y).toBe(0)
  
  expect(norm2.x).toBeCloseTo(0.44721359549996)
  expect(norm2.y).toBeCloseTo(0.89442719099992)

  expect(norm3.x).toBeCloseTo(0.85752860621137)
  expect(norm3.y).toBeCloseTo(0.51443628325498)

  expect(norm4.x).toBeCloseTo(-0.83205029433784)
  expect(norm4.y).toBeCloseTo(0.55470019622523)

  expect(norm5.x).toBeCloseTo(-0.76822127959738)
  expect(norm5.y).toBeCloseTo(-0.64018439966448)
})

test('Subtraction', () => {
  const sub1 = Vector2.subtract(test1, test1)
  const sub2 = Vector2.subtract(test1, test2)
  const sub3 = Vector2.subtract(test5, test4)
  const sub4 = Vector2.subtract(test3, test3)
  const sub5 = Vector2.subtract(test2, test1)
  const sub6 = Vector2.subtract(test3, test5)

  expect(sub1.x).toBe(0)
  expect(sub1.y).toBe(0)

  expect(sub2.x).toBe(-5)
  expect(sub2.y).toBe(-10)

  expect(sub3.x).toBe(-300)
  expect(sub3.y).toBe(-700)

  expect(sub4.x).toBeCloseTo(0)
  expect(sub4.y).toBeCloseTo(0)

  expect(sub5.x).toBe(5)
  expect(sub5.y).toBe(10)

  expect(sub6.x).toBeCloseTo(5600.99114)
  expect(sub6.y).toBeCloseTo(3500.123)
})