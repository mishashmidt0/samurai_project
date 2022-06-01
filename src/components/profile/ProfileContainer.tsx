import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {profileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {SuperProfileContainer} from "./CreatePosts/CreatePostsContainer";
import {useParams} from "react-router-dom";

type ProfileContainerType = {
    profile: profileType | null
    setUserProfile: (data: profileType) => void
    id: string
}


class ProfileContainer extends React.Component <ProfileContainerType> {
    
    componentDidMount() {
        let userId = this.props.id ? this.props.id : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return <SuperProfileContainer/>
    }
}


const ProfileURLMatch = (props: any) => {
    const {id} = useParams();
    return <ProfileContainer {...props} id={id}/>;
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileURLMatch)
