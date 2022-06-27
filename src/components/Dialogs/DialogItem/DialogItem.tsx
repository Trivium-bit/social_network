import {Link} from 'react-router-dom'
import classes from './../Dialogs.module.css'

type DialogsItenType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItenType) => {
let path = "/dialogs/1" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
        <Link to={path}>{props.name}</Link>
        </div> 
    )
}


export default DialogItem;