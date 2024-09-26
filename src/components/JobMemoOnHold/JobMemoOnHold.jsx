import { useState } from "react";
import classes from "./JobMemoOnHold.module.css";
import winClasses from "../Window.module.css";

export default function JobMemoOnHold({memo, onList, onDelete, onClassify}) {
    const [state, setState] = useState({
        error: false,
        selection: {}
    });

    function handleChange(event) {
        setState((prevState)=> {
            const key = event.target.id === 'select' ? 'list' : 'comment';

            const newState = {
                error: false,
                selection: {
                    ...prevState.selection,
                    [key]: event.target.value
                }
            }

            return newState;
        });
    }

    function handleClick(memo, selection) {
        if(state.selection.list === undefined || state.selection.list === "") { 
            //Set error to true if classification is missing
            setState((prevState)=> {
                const newState = {
                    selection: {...prevState.selection},
                    error: true
                }

                return newState;
            });

            return; 
        }
        
        //Classify memo if classification has been chosen
        onClassify(memo, selection);
    }

    return <form className={`${winClasses.window} ${winClasses.flex} ${classes.onHold} `}>
        <ol className={`${winClasses.jobInfo} ${winClasses.flex}`}>
            <li className={`${winClasses.company} ${winClasses.info}`}>{memo.companyName}</li>
            <li className={`${winClasses.job} ${winClasses.info}`}>{memo.jobName}</li>
            <li className={`${winClasses.date} ${winClasses.info}`}>{memo.date}</li>
        </ol>
        <div className={`${winClasses.inputContainer} ${winClasses.flex}`}>
            <label 
                className={winClasses.label} 
                htmlFor="comment"
            >
            Add a comment:
            </label>
            <textarea 
                maxLength="150"
                value={state.selection.comment}
                name="comment" 
                id="comment"
                onChange={handleChange} 
                className={`${winClasses.input} ${classes.comment} `}
            />
        </div>
        <div className={`${winClasses.inputContainer} ${winClasses.flex}`}>
            <label 
                className={winClasses.label} 
                htmlFor="classification"
            >
                Classify in:
            </label>
            <select 
                value={state.selection.list}
                onChange={handleChange} 
                name="select" 
                id="select"
                className={`${winClasses.input} ${classes.classification} `}
            >
                <option value="">Choose a classification</option>
                <option value="positiveRes">Positive response</option>
                <option value="negativeRes">Negative response</option>
                <option value="noRes">No response</option>
            </select>
        </div>
        {state.error && <p className={winClasses.errorMess}>Classification is missing !</p>}
        <ul className={`${winClasses.btnContainer} ${classes.btnContainer} `}>
            <li className={classes.btnBox}>
                <button 
                    onClick={(event)=>{
                        event.preventDefault();
                        onDelete(memo);
                    }}
                    className={`${winClasses.btnStyle} ${classes.btn}`}
                >
                Delete
                </button>
            </li>
            <li className={classes.btnBox}>
                <button 
                    onClick={(event)=>{
                        event.preventDefault();
                        handleClick(memo, state.selection);
                    }}
                    className={`${winClasses.btnStyle} ${classes.btn}`}
                >
                Classify
                </button>
            </li>
            <li className={classes.btnBox}>
                <button 
                    onClick={(event)=>{
                        event.preventDefault();
                        onList(memo.list);
                    }}
                    className={`${winClasses.btnStyle} ${classes.btn}`}
                >
                Back to list
                </button>
            </li>
        </ul>
    </form>
}