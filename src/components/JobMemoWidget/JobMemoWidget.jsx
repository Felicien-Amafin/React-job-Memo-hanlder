import classes from "./JobMemoWidget.module.css";
import winClasses from "../Window.module.css";

export default function JobMemoWidget({memo, onDisplay}) {
    const maxChar = 15;
    let companyName;
    let jobName;

    if(memo.companyName.length <= maxChar) {
        companyName = memo.companyName;
    }  else {
        companyName =  `${memo.companyName.substring(0, maxChar)}...`;
    }

    if(memo.jobName.length <= maxChar) {
        jobName = memo.jobName;
    }  else {
        jobName = `${memo.jobName.substring(0, maxChar)}...`;
    }

    
    return <button 
                className={classes.widget} 
                onClick={()=> {onDisplay(memo)}}
            >
        <h3 className={`${classes.company} ${winClasses.info}`}>{companyName}</h3>
        <p className={`${classes.job} ${winClasses.info}`}>{jobName}</p>
    </button>
}