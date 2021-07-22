import { Types } from '../actions/users-actions';

const initialState = {
    items: []
}

export default function users(state = initialState, action) {
    switch(action.type){
        case Types.GET_USERS_SUCCESS: {
            return {
                items: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}