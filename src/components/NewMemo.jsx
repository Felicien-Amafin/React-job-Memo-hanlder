import CreateMemoBtn from "./CreateMemoBtn"
import classes from './NewMemo.module.css';

export default function NewMemo({onNewMemo}) {
    return <div className={classes.newMemo}>
        <p className={classes.newMemo}>Create a new memo or select an option in menu</p>
        <CreateMemoBtn 
            text="+"
            classN={classes.createBtn}
            onNewMemo={onNewMemo}
            btnColor={classes.button}
        />
    </div>
}