import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sitebarReducer} from "./sidebar-reducer";
import {ussersReducer} from "./users-reducer";

let redusers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sitebarReducer: sitebarReducer,
    usersReducer: ussersReducer,
})
export let store = createStore(redusers);

export type AppStateType = ReturnType<typeof redusers>
