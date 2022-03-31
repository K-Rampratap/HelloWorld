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

export default TextForm;