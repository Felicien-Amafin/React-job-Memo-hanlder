export default function NewMemo({onCreate}) {
    return <>
        <p>Create a new memo or select an option in menu</p>
        <button onClick={onCreate}>Create new memo</button>
    </>
}