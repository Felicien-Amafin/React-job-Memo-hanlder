export default function Input({label, input, ...props }) {
    //Create flexible input
    return(
        <li>
            <label>{label}</label>
            {input ? <input {...props}/> : <textarea {...props} />}
        </li>
    )
}