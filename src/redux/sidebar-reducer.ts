import {forAction, forActionType} from "./Store";

let initialState = {}
export const sitebarReducer = (state: {} = initialState, action: forAction) => {

    switch (action.type) {
        case forActionType['ADD_POST']:
            return state

        default:
            return state;
    }

}
