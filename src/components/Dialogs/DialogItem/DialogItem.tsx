import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './../Dialogs.module.css'

type DialogsItenType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItenType) => {
let path = "/dialogs/1" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
        </div> 
    )
}


export default DialogItem;