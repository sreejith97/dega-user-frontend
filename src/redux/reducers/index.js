import {combineReducers} from 'redux';
import {generalReducers,loggedInCredentials } from './generalReducers';

const reducers = combineReducers({
    loggedInReducers: loggedInCredentials
})

export default reducers;