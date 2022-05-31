import React from 'react';
import Header from "./Header";
import axios from "axios";
import {setUserData, usersReducerPropsType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type headerContainerPropsType = {
    data: usersReducerPropsType
    setUserData: (userid: number, email: string, login: string, isFetching: boolean, isAuth: boolean) => void
}


class HeaderContainer extends React.Component <headerContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(
            response => {
                if (response.data.resultCode === 0) {
                    const {email, id, login} = response.data.data
                    this.props.setUserData(id, email, login, true, true)
                }
            })
    }

    render() {
        return <Header data={this.props.data}/>
    }

}


const mapStateToProps = (state: AppStateType) => {
    return {
        data: state.auth
    }
}
export const HeaderContainerApi = connect(mapStateToProps, {setUserData})(HeaderContainer)
