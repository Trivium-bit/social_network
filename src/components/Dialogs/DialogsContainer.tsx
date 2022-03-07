import React, {Dispatch} from 'react'
import {sendMessageAC, DialogPageType} from "./../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {AppStateType} from '../../Redux/redux-store';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type MapStateToPropsType = {
    dialogPage: DialogPageType
}

type MapDispatchPropsType = {
    sendMessage: (newMessageText: string) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(sendMessageAC(newMessageText))
        }      
    }
}

/*const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
export default DialogsContainer */

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
