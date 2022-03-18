import {forActionType} from "./Store";
import {forAction} from "./profile-reducer";

let initialState = {}
export const sitebarReducer = (state: {} = initialState, action: forAction) => {

    switch (action.type) {
        case forActionType['ADD_POST']:
            return state

        default:
            return state;
    }

}
