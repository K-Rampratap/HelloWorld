---
description: prop types to be defined in the component
---

# prop types



```javascript
//define datatyes to be passed
Navbar.propTypes = {
    title: PropTypes.string, //PropTypes.string.isRequired, if not passed then ERROR
    about: PropTypes.string
}

//Define default props when not passed
Navbar.defaultProps = {
    title: "Set title here",
    about: "Set about here"
}
```
