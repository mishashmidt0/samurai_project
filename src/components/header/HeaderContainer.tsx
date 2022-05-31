import React from 'react';
import Header from "./Header";
import axios from "axios";
import {getMe, setUserData, usersReducerPropsType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type headerContainerPropsType = {
    data: usersReducerPropsType
    setUserData: (userid: number, email: string, login: string, isFetching: boolean, isAuth: boolean) => void
    getMe: () => void
}


class HeaderContainer extends React.Component <headerContainerPropsType> {

    componentDidMount() {
        this.props.getMe()

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
export const HeaderContainerApi = connect(mapStateToProps, {setUserData, getMe})(HeaderContainer)
