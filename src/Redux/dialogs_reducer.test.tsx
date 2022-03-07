import { v1 } from 'uuid';
import {InitialStateType, DialogsType, MessageType, sendMessageAC, deleteMessageAC, dialogsReducer} from './dialogs_reducer'

let state: InitialStateType = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Igor" }
    ] as Array<DialogsType>,
    messages: [
        { id: v1(), message: "Hi!" },
        { id: v1(), message: "Hello my frieds!" },
        { id: v1(), message: "Go Dota?" },
        { id: v1(), message: "Yes!" },
        { id: v1(), message: "La-la-la" }
    ] as Array<MessageType>,
    newMessageText: 'it-kamasutra.com'
};


test('length of messages should be incremented', () => {
    let action = sendMessageAC("Hello!");
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(6);
});
test('message should be incremented', () => {
    let action = sendMessageAC("Matrix");
    let newState = dialogsReducer(state, action);
    expect(newState.messages[5].message).toBe("Matrix");
});
test('after deleting length of messages should be decrement', () => {
    let action = deleteMessageAC(v1());
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(4);
});
