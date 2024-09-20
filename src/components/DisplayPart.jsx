import NewMemo from "./NewMemo";
import JobMemoForm from "./JobMemoForm";
import JobMemoWidget from "./JobMemoWidget";
import JobMemoOnHold from "./JobMemoOnHold";
import JobMemo from "./JobMemo";

export default function DisplayPart({displayMode, lists, memoFunc, onList}) {
    let uiContent;

    if(displayMode === '') { 
        uiContent = <NewMemo onNewMemo={memoFunc.newMemo}/> 
    }

    if(displayMode.mode === 'create') {
        uiContent = <JobMemoForm 
                        onSave={memoFunc.saveNewMemo} 
                        onCancel={memoFunc.cancelNewMemo}
                    />
    }

    if(displayMode.mode === 'list') {
        const listName = displayMode.listName;
        uiContent = lists[listName].length > 0 ? lists[listName] : <p>List is empty</p>;
    }

    if(displayMode.mode === 'memo') { 
        const memo = displayMode.memoData;
        const memoType = displayMode.memoData.type;
       
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
    
    return <main>
        <section>
            {uiContent.length > 0 ? uiContent.map((memo)=> {
                return <JobMemoWidget 
                            key={memo.id}
                            memo={memo}
                            onDisplay={memoFunc.displayMemo}
                        />
            }) : uiContent}
        </section>
    </main>
    
}