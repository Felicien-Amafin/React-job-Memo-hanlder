import React from "react";

function Input({label, input, ...props }, ref) {
    return(
        <li>
            <label>{label}</label>
            {input ? <input ref={ref} {...props}/> : <textarea ref={ref} {...props} />}
        </li>
    )
}

export default React.forwardRef(Input);