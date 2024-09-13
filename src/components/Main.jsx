import { useState } from "react";
import NewMemo from "./NewMemo"
import SideBar from "./SideBar"

export default function Main({search}) {
// search must be an array. If array length === 0 
    const [uiState, setUiState] = useState({option:'create'});

    function handleNewMemo() { setUiState('create') };

    function handleMemoList(option) { setUiState(option) };

    function handleMemo() { setUiState(memo) };

    let content;

    if(uiState.option === 'create') { content = <NewMemo/> }
    

    return <main>
        <section>
           {!search ? content: search.map((memo)=> {
                console.log('search')
           })}
        </section>
        <SideBar 
            onNewMemo={handleNewMemo}
            onMemoList={handleMemoList}
        />
    </main>
}