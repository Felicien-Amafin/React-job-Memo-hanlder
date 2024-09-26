export default function CreateMemoBtn({text, classN, onNewMemo, onNav}) {
    function handleClick(onNewMemo, onNav) {
        onNewMemo();

        if(onNav) { onNav(); }
    }

    return(
        <button className={classN}
            type="button"
            onClick={ ()=> { handleClick(onNewMemo, onNav) } }
        >
        {text}
        </button>
    )
}