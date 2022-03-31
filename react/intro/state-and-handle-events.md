---
description: '{useState}'
---

# State and Handle events

* `const [count, setCount] = useState(0)`  count will be updated only by setCount without reloading the page.
* Prior to functional components, class components used `this.state` to set the state, but here as we are using functional components - _**Hooks**_ enable use to class features without creating a class.
* `const [count, setCount] = useState(0)` array de-structuring is being used. U can directly set count, you should use `setCount` only.

```javascript
import React, { useState } from 'react';
import PropTypes from 'prop-types';



const defaultProps = {};

const TextForm = (props) => {
    const [text, setText] = useState("This is First state");

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value); //we will be able to see what we typed
    }
    return (
        <div>
            <div className="mb-3">
                <h2>{props.title} </h2>
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} id="myBox" rows="6" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Covert to uppercase</button>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
    title: PropTypes.string
};
TextForm.defaultProps = defaultProps;

export default TextForm
```

#### Footnotes  :clap:

{% embed url="https://reactjs.org/docs/hooks-intro.html" %}
