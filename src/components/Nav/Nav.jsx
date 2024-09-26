import CreateMemoBtn from "../CreateMemoBtn/CreateMemoBtn";
import classes from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faThumbsUp, faThumbsDown, faCommentSlash, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function Nav({nav, isVisible}) {
    const btns = [
        {name: 'Awaiting', listName: 'awaitingRes', icon: faClockRotateLeft}, 
        {name: 'Positive', listName: 'positiveRes', icon: faThumbsUp}, 
        {name: 'Negative', listName: 'negativeRes', icon: faThumbsDown}, 
        {name: 'No response', listName: 'noRes', icon: faCommentSlash}
    ];
    
    function handleClick(listName) {
        nav.onList(listName);
        nav.onNav();
    }

    return <div className={`${classes.navContainer} ${isVisible? classes.visible: classes.hidden}`}>
        <div className={classes.btnPlusIcon}>
            <FontAwesomeIcon icon={faCirclePlus} className={classes.createIcon}/>
            <CreateMemoBtn 
                text="Create"
                classN={classes.createBtn}
                onNewMemo={nav.newMemo}
                onNav={nav.onNav}
            />
        </div>
        <nav>
            <h2>Responses</h2>
            <ul>
                {btns.map((btn)=> {
                    const memoNum = nav.lists[btn.listName].length;
                    const olKey = `${btn.listName}-key`;
                    const resColor = btn.listName;
                    const btnIcon = btn.icon;

                    return <ol key={olKey} className={classes.ol}>
                        <li>
                            <div className={classes.btnPlusIcon}>
                                <FontAwesomeIcon icon={btnIcon} className={classes[resColor]}/>
                                <button 
                                    className={classes.button}
                                    type="button" 
                                    onClick={()=> {handleClick(btn.listName)}}
                                >
                                {btn.name}
                                </button>
                            </div>
                        </li>
                        <li>
                            <span className={classes[resColor]}>{memoNum}</span>
                        </li>
                    </ol>
                })}    
            </ul>
        </nav>
    </div>
}
