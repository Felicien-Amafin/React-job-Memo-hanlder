import Input from "./Input";
import { useRef, useState } from "react";

export default function JobMemoForm({onSave, onCancel}) {
    const [error, setError] = useState(false);

    const companyName = useRef();
    const jobName = useRef();
    const date = useRef();

    function handleSave(event) {
        event.preventDefault();
        //Set error if empty fields
        if(
            companyName.current.value.trim() === '' ||
            jobName.current.value.trim() === '' ||
            date.current.value.trim() === ''
        ) {
            setError(true);

            return
        }

        const memo = {
            id: Date.now(),
            type:'onHold',
            list: 'awaitingRes',
            companyName: companyName.current.value.toUpperCase(),
            jobName: jobName.current.value.toUpperCase(),
            date: date.current.value.toUpperCase()
        }

        //Save if fields have been filled
        onSave(memo);
    } 

    function handleCancellation(event) {
        event.preventDefault();
        onCancel();
    }
    
    return <form>
        <ol>
            <Input ref={companyName} label="Company name" input type="text"></Input>
            <Input ref={jobName} label="Job's name" input type="text"></Input>
            <Input ref={date} label="Application's date" input type="date"></Input>
        </ol>
        {error && <p>Fill empty fields.</p>}
        <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancellation}>Cancel</button>
        </div>
    </form>
}
