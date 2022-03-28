
export interface IVector2 {
  x: number
  y: number
}

export function distance(a: IVector2, b: IVector2): number {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}

export function dot(a: IVector2, b: IVector2): number {
  return a.x * b.x + a.y * b.y
}

export function mag(v: IVector2): number {
  return Math.sqrt((v.x ** 2 + v.y ** 2))
}

export function normalize(v: IVector2): IVector2 {
  if (v.x === 0 && v.y === 0) {
    return {x: 0, y: 0}
  }

  const magnitude  = mag(v)
  return { x: v.x / magnitude, y: v.y / magnitude }
}

export function subtract(b: IVector2, a: IVector2): IVector2 {
  return { x: b.x - a.x, y: b.y - a.y }
}
