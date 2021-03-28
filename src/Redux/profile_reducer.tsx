import {PostsType, ActionsType, AddPostActionType, ChangeNewTextActionType, ProfilePageType} from './store'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 12},
        {id: 2, message: "Hi!", likesCount: 9},
        {id: 3, message: "Go Dota?", likesCount: 50},
        {id: 4, message: "Yo!", likesCount: 15}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = " ";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newPostText: string): ChangeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: newPostText
})

export default profileReducer;