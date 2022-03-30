# export

module1.js

```javascript
const a = "First";
const b = "Second";
const c = "Third";

export default a;
export { b };
export { c };ja
```

module2.mjs

```javascript
import a, { b } from './module1.mjs'

console.log(a); //default export
console.log(b); //named exportj
```

> node .\module2.mjs

Output

> First
>
> Second

