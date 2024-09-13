import Input from "./Input"

export default function JobMemoForm({onSave, onCancel}) {
    //Create a job memo
    return <div>
        <ol>
            <Input label="Company name" input type="text"></Input>
            <Input label="Job's name" input type="text"></Input>
            <Input label="Application's date" input type="date"></Input>
        </ol>
        <div>
            <button onSave={onSave}>Save</button>
            <button onSave={onCancel}>Cancel</button>
        </div>
    </div>
}