// Use combineReducer from redux to combine multiple reducers
import { combineReducers } from 'redux';
import UsersReducer from './users-reducer';

export default combineReducers({
    users: UsersReducer
})