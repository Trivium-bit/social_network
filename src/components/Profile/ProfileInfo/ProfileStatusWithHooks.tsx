import React, { useState } from 'react';
import { ChangeEvent } from 'react';

type StatusProsType = {
    status: string
    updateStatus: (status: string) => void

}
const ProfileStatusWithHooks = (props: StatusProsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "----"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}/>
                       
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
