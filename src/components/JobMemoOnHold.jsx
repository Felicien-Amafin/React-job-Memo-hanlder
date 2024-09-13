export default function JobMemo({jobMemo, onSelect, onClassify, onDelete}) {
    //Summaries an application
    //Should receive an object
    //Allows comment adding
    return <div>
        <ol>
            <li>{jobMemo.companyName}</li>
            <li>{jobMemo.jobName}</li>
            <li>{jobMemo.applicationDate}</li>
        </ol>
        <label for="comment">Add a comment:</label>
        <textarea name="comment" id="coment"></textarea>
        <label for="classification">Classify in:</label>
        <select onChange={onSelect} name="classification" id="classification">
            <option value="">Choose a classification</option>
            <option value="">Positive response</option>
            <option value="">Negative response</option>
        </select>
        <div>
            <button onClick={onClassify}>Classify</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    </div>
}