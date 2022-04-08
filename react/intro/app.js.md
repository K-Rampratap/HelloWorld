# App.js



* Contains JSX inside return of function component.
* JSX is JavaScript syntax extension in which we can write HTML and add JavaScript in between in curly brackets.
* for in HTML is htmlFor in JSX, class -> className
* In return wee should return only one element. If you have multipple elements then we should enclose in JSX fragment **( <> .. \</> )** .&#x20;
* React doesnt take into account external html passed as a variable to JSX.

```jsx
let name = "<b> React </b>"

function App {
  return (
    <h3>> Hello {name} </h3>
  );
}
```

The output -> Hello \<b> React \</b>&#x20;

* Babel compiles JSX down to `React.createElement()` calls.

![](<../../.gitbook/assets/image (7) (1).png>)

#### Footnotes :tada:

{% embed url="https://reactjs.org/docs/introducing-jsx.html" %}
