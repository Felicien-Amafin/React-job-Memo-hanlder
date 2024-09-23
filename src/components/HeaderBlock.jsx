import classes from "./HeaderBlock.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClipboard } from '@fortawesome/free-solid-svg-icons';

export default function HeaderBlock({h1, onNav}) {
    return <div className={`${classes.headerBlock} ${classes.flex}`}>
        <div className={`${classes.h1PlusIcon} ${classes.flex}`}>
            <FontAwesomeIcon icon={faClipboard} />
            <h1>{h1}</h1>
        </div>
        <button className={classes.button} type="button" onClick={()=> {onNav()}}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
    </div>
}