import { useState } from "react"

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

    return <form>
        <ol>
            <li>{memo.companyName}</li>
            <li>{memo.jobName}</li>
            <li>{memo.date}</li>
        </ol>
        <label htmlFor="comment">Add a comment:</label>
        <textarea 
            value={state.selection.comment}
            name="comment" 
            id="comment"
            onChange={handleChange} 
        />
        <label htmlFor="classification">Classify in:</label>
        <select 
            value={state.selection.list}
            onChange={handleChange} 
            name="select" 
            id="select"
        >
            <option value="">Choose a classification</option>
            <option value="positiveRes">Positive response</option>
            <option value="negativeRes">Negative response</option>
            <option value="noRes">No response</option>
        </select>
        {state.error && <p>Classification is missing !</p>}
        <ul>
            <li>
                <button 
                    onClick={(event)=>{
                        event.preventDefault();
                        onDelete(memo);
                    }}
                >
                Delete
                </button>
            </li>
            <li>
                <button 
                    onClick={(event)=>{
                        event.preventDefault();
                        handleClick(memo, state.selection);
                    }}
                >
                Classify
                </button>
            </li>
            <li>
                <button 
                    onClick={(event)=>{
                        event.preventDefault();
                        onList(memo.list);
                    }}
                >
                Back to list
                </button>
            </li>
        </ul>
    </form>
}