import React, { useEffect, useState } from 'react';

type StatusProsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: StatusProsType) => {
    debugger

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        debugger
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} />

                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
