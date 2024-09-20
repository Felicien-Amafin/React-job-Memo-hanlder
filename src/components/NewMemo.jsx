import CreateMemoBtn from "./CreateMemoBtn"

export default function NewMemo({onNewMemo}) {
    return <>
        <p>Create a new memo or select an option in menu</p>
        <CreateMemoBtn onNewMemo={onNewMemo}/>
    </>
}