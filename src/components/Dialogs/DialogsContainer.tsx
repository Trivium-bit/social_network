import React, {Dispatch} from 'react'
import {updateNewMessageTextAC, sendMessageAC, DialogPageType, MessageType} from "./../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {AppStateType} from '../../Redux/redux-store';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogPage: DialogPageType
    isAuth: boolean
}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
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

let AuthRedirectContainer = withAuthRedirect(Dialogs);



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;
