import React from 'react';
import {connect} from 'react-redux';
import {CreatePost} from "./CreatePosts";
import {AppStateType} from "../../../redux/redux-store";
import {addPost, chengeMessageTextArea} from "../../../redux/profile-reducer";


// type forCreatePost = {
// changeText: string,
// dispatch: (action: forAction) => void;
// }
// export function CreatePostContainer(props: forCreatePost) {
// const addPost = (): void => {
//     props.dispatch({type: 'ADD-POST'});
// }
// const onPostChange = (text: string): void => {
//     props.dispatch({
//         type: 'CHANGE-PROFILE',
//         chengeProfileTextArea: text
//     })
// }
//
// return (
//     <CreatePost updateNewPostText={onPostChange} onAddPost={addPost} changeText={props.changeText}/>
// )
// }


let mapStateToProps = (state: AppStateType) => {
    return {
        changeText: state.profileReducer.changeText,
        postData: state.profileReducer.postData
    }
}
// let mapDispatchToProps = (dispatch: (action: forAction) => void) => {
//     return {
//         onAddPost: () => {
//             dispatch({type: 'ADD-POST'});
//         },
//         updateNewPostText: (text: string) => {
//             dispatch({
//                 type: 'CHANGE-PROFILE',
//                 chengeProfileTextArea: text
//             })
//         }
//     }
// }

export const SuperCreatePostContainer =
    connect(mapStateToProps, {
            addPost,
            chengeMessageTextArea
        }
    )(CreatePost)
