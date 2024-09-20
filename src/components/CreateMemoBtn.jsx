export default function CreateMemoBtn({onNewMemo}) {
    return(
        <button 
            type="button"
            onClick={ ()=> { onNewMemo() } }
        >
        Create new memo
        </button>
    )
}