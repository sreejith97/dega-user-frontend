import {ActionTypes} from '../contants/action-types';



export const setLoggedInCredentials = (credentials)=>{
    return {
        type: ActionTypes.SET_LOGINED_CREDENTIALS,
        payload: credentials
    }
}