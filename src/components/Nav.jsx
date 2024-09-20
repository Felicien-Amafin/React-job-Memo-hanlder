import CreateMemoBtn from "./CreateMemoBtn";
import classes from "./Nav.module.css";

export default function Nav({nav}) {
    const btns = [
        {name:'Awaiting responses', listName:'awaitingRes'}, 
        {name:'Positive responses', listName:'positiveRes'}, 
        {name:'Negative responses', listName:'negativeRes'}, 
        {name:'No response', listName:'noRes'}
    ];

    return <div className={classes.nav}>
        <CreateMemoBtn 
            onNewMemo={nav.newMemo}
        />
        <nav>
            <h2>Memos Lists</h2>
            <ul>
                {btns.map((btn)=> {
                    const memoNum = nav.lists[btn.listName].length;
                    return <ol key={btn.listName}>
                        <li>
                            <button 
                                type="button" 
                                onClick={ ()=> { nav.onList(btn.listName) } }
                            >
                            {btn.name}
                            </button>
                        </li>
                        <li>
                            <span>{memoNum}</span>
                        </li>
                    </ol>
                })}    
            </ul>
        </nav>
    </div>
}