export default function JobMemoWidget({memo, onDisplay}) {
    return <button onClick={()=> {onDisplay(memo)}}>
        <h3>{memo.companyName}</h3>
        <p>{memo.jobName}</p>
    </button>
}