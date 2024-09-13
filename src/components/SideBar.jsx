export default function SideBar({onNewMemo, onMemoList}) {
    const btns = [
        {name:'All', listName:'all'}, 
        {name:'Awaiting responses', listName:'awaiting-res'}, 
        {name:'Positive responses', listName:'positive-res'}, 
        {name:'Negative responses', listName:'negative-res'}, 
        {name:'No responses', listName:'no-res'}
    ];

    return <aside>
        <button 
            type="button"
            onClick={ ()=> { onNewMemo('create') } }
        >
        Create new memo
        </button>
        <div>
            <h2>My memos</h2>
            <ul>
                {btns.map((btn)=> {
                    const list = {
                        listName:btn.listName,
                        option:'list'
                    }
            
                    return <li key={btn.listName}>
                        <button 
                            type="button" 
                            onClick={ ()=> { onMemoList(list) } }
                        >
                        {btn.name}
                        </button>
                    </li>
                })}    
            </ul>
        </div>
        
    </aside>
}