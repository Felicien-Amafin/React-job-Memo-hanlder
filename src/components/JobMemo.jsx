export default function JobMemo({jobMemo}) {
    //Summaries an application
    //Should receive an object
    //Display a comment if there is one
    return <div>
        <ol>
            <li>{jobMemo.companyName}</li>
            <li>{jobMemo.jobName}</li>
            <li>{jobMemo.applicationDate}</li>
            {jobMemo.comment ? <li>{jobMemo.comment}</li> : null}
        </ol>
    </div>
}