import profileReducer, { addPostActionCreator, PostsType, ProfilePageType } from './profile_reducer'

let state: ProfilePageType = {
    posts: [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "Hi!", likesCount: 9 },
        { id: 3, message: "Go Dota?", likesCount: 50 },
        { id: 4, message: "Yo!", likesCount: 15 }
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra.com',
    profile: {
        id: 'string',
        lookingForAJob: false,
        lookingForAJobDescription: 'string',
        fullName: 'string'
    },
    status: 'string'
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);
    
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {

    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("it-kamasutra.com");

});
