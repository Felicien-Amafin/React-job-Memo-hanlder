import classes from "./JobMemo.module.css";
import winClasses from "../Window.module.css";

export default function JobMemo({memo, onDelete, onList}) {
    return <div className={`${winClasses.window} ${winClasses.flex} ${classes.memo}`}>
        <ol className={`${winClasses.jobInfo} ${winClasses.flex}`}>
            <li 
                className={`${winClasses.company} ${winClasses.info}`}
            >
            {memo.companyName}
            </li>
            <li 
                className={`${winClasses.job} ${winClasses.info}`}
            >
            {memo.jobName}
            </li>
            <li 
                className={`${winClasses.date} ${winClasses.info}`}
            >
            {memo.date}
            </li>
            {memo.comment ? 
            <li className={`${winClasses.info} ${classes.comment}`}>{memo.comment}</li> 
            : null}
        </ol>
        <div className={`${winClasses.btnContainer} ${classes.btnContainer}`}>
            <button 
                onClick={()=> {onDelete(memo)}}
                className={`${winClasses.btn} ${winClasses.btnStyle}`} 
            >
            Delete
            </button>
            <button
                onClick={()=> {onList(memo.list)}}
                className={`${winClasses.btn} ${winClasses.btnStyle}`} 
            >
            Back to List
            </button>
        </div>
    </div>
}