import React, {Dispatch} from 'react'
import {updateNewMessageTextAC, sendMessageAC, DialogPageType, MessageType} from "./../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {AppStateType} from '../../Redux/redux-store';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type MapStateToPropsType = {
    dialogPage: DialogPageType

}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

/* const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
export default DialogsContainer */

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
