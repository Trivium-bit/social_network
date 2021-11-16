import React from 'react';
import { ChangeEvent } from 'react';

type StatusProsType = {
    status: string
    updateStatus: (status: string) => void
}
class ProfileStatus extends React.Component<StatusProsType> {
    state = {
        editMode: false,
        status: this.props.status

    }

    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })     
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }


    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate() {
        this.setState({
            status: this.props.status
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status ||"----" } </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;
