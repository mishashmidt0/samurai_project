import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sitebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sitebarReducer: sitebarReducer,
    usersReducer: usersReducer,
    auth: authReducer,
})
export let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof redusers>
