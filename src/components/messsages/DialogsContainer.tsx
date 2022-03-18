import React from 'react';
import {connect} from 'react-redux';
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {addMessage, changeMessage} from "../../redux/dialog-reducer";


// type typeForMessages = {
// state: forState;
// dispatch: (action: forAction) => void;
// }

// export function MessagesContainer(props: typeForMessages) {
// const addMessage = () => {
//     props.dispatch({type: 'ADD-MESSAGE'});
// }
// const changeMessageArea = (text: string) => {
//     props.dispatch({type: 'CHANGE-MESSAGE', chengeMessageTextArea: text})
// }
// return <Messages addMessage={addMessage} changeMessageArea={changeMessageArea} messages={props.state.messages}/>
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        dailogsData: state.dialogReducer.dailogsData,
        messageData: state.dialogReducer.messageData,
        changeMessagesAreaStart: state.dialogReducer.changeMessagesArea
    }
}
// let mapDispatchToProps = (dispatch: (action: forAction) => void) => {
//     return {
//         addMessage: () => {
//             dispatch({type: 'ADD-MESSAGE'});
//         },
//         changeMessageArea: (text: string) => {
//             dispatch({type: 'CHANGE-MESSAGE', chengeMessageTextArea: text})
//         }
//     }
// }

export const DialogsContainer =
    connect(mapStateToProps, {
        addMessage,
        changeMessage
    })(Dialogs);

