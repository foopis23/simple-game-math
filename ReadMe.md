# Simple Game Math API Reference
A node package for simple math functions and types for game development.

## Vector2
A module for Vector2 types and functions.

### Interface: Vector2.IVector2
An interface for vectors.

#### Vector2.IVector2.x : number
X component of vector.

#### Vector2.IVector2.y : number
Y component of vector.

```ts
import { Vector2 } from 'simple-game-math'
const newVector: Vector2.IVector2 = {
  x: 0,
  y: 10
}
```

```ts
import { Vector2 } from 'simple-game-math'

class Vector extends IVector2 {
  constructor(public x: number, public y: number) {}
}
```

### Vector2.distance(a: IVector2, b: IVector2): number
Returns the distance between 2 vectors points.

```ts
import { Vector2 } from 'simple-game-math'
const dist =  Vector2.distance({x: 0, y: 0}, {x: 10, y: 0})

console.log(dist) // output: 10
```

### Vector2.dot(a: IVector2, b: IVector2): number
Returns the dot product between 2 vectors.

```ts
import { Vector2 } from 'simple-game-math'

console.log(Vector2.dot({x: 1, y: 1}, {x: 10, y: 10})) // output: {x: 10, y: 10}
```

### Vector2.mag(v: IVector2): number
Returns the magnitude of a vector.

```ts
import { Vector2 } from 'simple-game-math'

console.log(Vector2.mag({x: 5, y: 10})) //output: 11.180339887498949
```

### Vector2.normalize(v: IVector2): IVector2
Returns a vector with a magnitude of one in the same direction as the input vector.

```ts
import { Vector2 } from 'simple-game-math'

console.log(Vector2.normalize({x: 5, y: 10})) // output: {x: 0.44721359549996, y: 0.89442719099992}
```

### Vector2.subtract(b: IVector2, a: IVector2): IVector2
Returns a vector where the components are equal to `x = b.x - a.x and y = b.y - a.y`.

```ts
import { Vector2 } from 'simple-game-math'

console.log(Vector2.subtract({x: 10, y: 15}, {x: 5, y: 5})) //output: {x: 5, y: 10}
```

## Math
A module for providing basic math functions.

### Math.clamp(v: number, min: number, max: number): number
Returns the a V clamped between min and max.

```ts
import { Math } from 'simple-game-math'

console.log(Math.clamp(20, 0, 10)) //output: 10
```

### Math.moveTowards(current: number, towards: number, maxStep: number): number
Returns a number that is between current and towards but will not exceed towards.

```ts
import { Math } from 'simple-game-math'

console.log(Math.moveTowards(0, 10, 5)) // output: 5
console.log(Math.moveTowards(0, 10, 20)) // output: 10
console.log(Math.moveTowards(0, 10, -10)) // output: 0
```

### Math.lerp(start: number, end: number, step: number): number
Linearly interpolates between two numbers

```ts
import { Math } from 'simple-game-math'

console.log(Math.lerp(0, 10, 0.5)) // output: 5
console.log(Math.lerp(0, 10, 0.25)) // output: 2.5
console.log(Math.lerp(0, 10, 0.75)) // output: 7.5
console.log(Math.lerp(0, 10, 1)) // output: 10
```
