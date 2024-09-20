export default function JobMemo({memo, onDelete, onList}) {
    return <div>
        <ol>
            <li>{memo.companyName}</li>
            <li>{memo.jobName}</li>
            <li>{memo.date}</li>
            {memo.comment ? <li>{memo.comment}</li> : null}
        </ol>
        <button onClick={()=> {onDelete(memo)}}>Delete</button>
        <button onClick={()=> {onList(memo.list)}}>Back to List</button>
    </div>
}