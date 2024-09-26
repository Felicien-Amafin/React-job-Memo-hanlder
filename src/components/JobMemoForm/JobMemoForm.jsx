import Input from "../Input/Input";
import { useRef, useState } from "react";
import winClasses from "../Window.module.css";

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
    
    return <form 
                style={{padding: 20}} 
                className={`${winClasses.window} ${winClasses.flex} ${classes.formMemo} `}
            >
        <ol className={`${winClasses.flex} ${winClasses.inputContainer} `}>
            <Input 
                ref={companyName} 
                label="Company's name" 
                inputType="text"
            />
            <Input 
                ref={jobName} 
                label="Job's name"  
                inputType="text"
            />
            <Input 
                ref={date} 
                label="Application's date"  
                inputType="date"
            />
        </ol>
        {error && <p className={winClasses.errorMess}>Fill empty fields.</p>}
        <div className={`${winClasses.btnContainer} ${classes.btnSavePlusCancel}`}>
            <button 
                className={`${winClasses.btn} ${winClasses.btnStyle}`} 
                onClick={handleSave}
            >
            Save
            </button>
            <button 
                className={`${winClasses.btn} ${winClasses.btnStyle}`}  
                onClick={handleCancellation}
            >
            Cancel
            </button>
        </div>
    </form>
}
