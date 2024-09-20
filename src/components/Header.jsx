import Nav from "./Nav"
import classes from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({h1, nav}) {
    return <header className={classes.header}>
        <h1>{h1}</h1>
        <button type="button">
            <FontAwesomeIcon icon={faBars}/>
        </button>
        <Nav nav={nav}/>
    </header>
}