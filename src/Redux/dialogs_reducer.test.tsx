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
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hello my frieds!" },
        { id: 3, message: "Go Dota?" },
        { id: 4, message: "Yes!" },
        { id: 5, message: "La-la-la" }
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
    let action = deleteMessageAC(3);
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(4);
});
