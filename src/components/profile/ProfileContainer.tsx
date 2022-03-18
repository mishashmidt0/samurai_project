import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfileContainerType = {
    profile: profileType | null
    setUserProfile: (data: profileType) => void
}


class ProfileContainer extends React.Component <ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
            response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        console.log(this.props)
        return (

            <Profile {...this.props}/>
        )
    }

}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
