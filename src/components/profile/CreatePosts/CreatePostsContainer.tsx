import React from 'react';
import {connect} from 'react-redux';
import {CreatePost} from "./CreatePosts";
import {AppStateType} from "../../../redux/redux-store";
import {addPost, chengeMessageTextArea} from "../../../redux/profile-reducer";




let mapStateToProps = (state: AppStateType) => {
    return {
        changeText: state.profileReducer.changeText,
        postData: state.profileReducer.postData,
        profile: state.profileReducer.profile
    }
}

export const SuperProfileContainer =
    connect(mapStateToProps, {
            addPost,
            chengeMessageTextArea
        }
    )(CreatePost)
