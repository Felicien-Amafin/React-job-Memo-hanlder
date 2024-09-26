import React from "react";
import classes from "./Input.module.css";
import winClasses from '../Window.module.css';

function Input({label, inputType }, ref) {
    return(
        <li className={`${winClasses.flex} ${classes.inputPLusLabel}`}>
            <label className={winClasses.label}>{label}:</label>
            <input 
                maxLength="30"
                className={`${winClasses.input} ${classes.input}`}
                ref={ref} 
                type={inputType}
            /> 
        </li>
    )
}

export default React.forwardRef(Input);