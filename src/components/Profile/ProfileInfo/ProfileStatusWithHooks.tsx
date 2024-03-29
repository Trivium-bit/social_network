import React, { useEffect, useState } from 'react';

type StatusProsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: StatusProsType) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
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
                    <b>Status:</b><span onDoubleClick={activateEditMode}> {props.status || "----"} </span>
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
