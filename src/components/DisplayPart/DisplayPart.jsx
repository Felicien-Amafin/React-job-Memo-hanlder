import NewMemo from "../NewMemo/NewMemo";
import JobMemoForm from "../JobMemoForm/JobMemoForm";
import JobMemoWidget from "../JobMemoWidget/JobMemoWidget";
import JobMemoOnHold from "../JobMemoOnHold/JobMemoOnHold";
import JobMemo from "../JobMemo/JobMemo";
import classes from "./DisplayPart.module.css";

export default function DisplayPart({displayMode, lists, memoFunc, onList}) {
    let uiContent;
    let title;

    if(displayMode === '') { 
        uiContent = <NewMemo onNewMemo={memoFunc.newMemo}/> 
    }

    if(displayMode.mode === 'create') {
        uiContent = <JobMemoForm 
                        onSave={memoFunc.saveNewMemo} 
                        onCancel={memoFunc.cancelNewMemo}
                    />
        title = "New memo";
    }

    if(displayMode.mode === 'list') {
        const listName = displayMode.listName;
        uiContent = lists[listName].length > 0 ? lists[listName] : <p>List is empty</p>;
        
        if(listName === 'awaitingRes') { title = 'Awaiting responses' }
        if(listName === 'positiveRes') { title = 'Positive responses'}
        if(listName === 'negativeRes') { title = 'Negative responses'}
        if(listName === 'noRes') { title = 'No responses'}
    }

    if(displayMode.mode === 'memo') { 
        const memo = displayMode.memoData;
        const memoType = displayMode.memoData.type;
        title = memoType === 'onHold' ? 'Memo on hold' : 'Memo';

        uiContent = <JobMemo 
                        memo={memo}
                        onDelete={memoFunc.deleteMemo}
                        onList={onList}
                    />;

        if(memoType === 'onHold') {
            uiContent = <JobMemoOnHold 
                            memo={memo}
                            onList={onList}
                            onDelete={memoFunc.deleteMemo}
                            onClassify={memoFunc.classifyMemo}
                        />
        }
    }
    
    return <section 
                className={uiContent.length > 0 ? 
                    `${classes.display} ${classes.list}` : 
                    `${classes.display} ${classes.generic}`
                }
            >
            <h2 
                className={classes.title}
            >
            {title}
            </h2>
            {uiContent.length > 0 ? uiContent.map((memo)=> {
                return <JobMemoWidget 
                            key={memo.id}
                            memo={memo}
                            onDisplay={memoFunc.displayMemo}
                        />
            }) : uiContent}
    </section>
}