import {ActionTypes} from '../contants/action-types';


const initialCredentials = {
    user:null
}


export const loggedInCredentials = (state=initialCredentials,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_LOGINED_CREDENTIALS:
            return{user:payload}
        default:
            return state;    
    }
}