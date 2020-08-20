import { USERS_ACTION_TYPES } from '../enums';
import { Action } from '../interfaces/action.interface';
import { User } from '../interfaces/user.interface';

export interface State {
    list: undefined | null | User[];
    loading: boolean;
    error: null | string;
}

export const initialState: State = {
    list: null,
    loading: false,
    error: null
};

export const usersReducer = (state = initialState, action: Action): State => {
    switch(action.type) {
        case USERS_ACTION_TYPES.USERS_LOAD:
            return {
                ...state,
                loading: true,
                error: null
            };
        case USERS_ACTION_TYPES.USERS_LOAD_ERROR: 
            return {
                ...state,
                loading: false,
                error: 'Error loading list of users',
                list: null
            }
        case USERS_ACTION_TYPES.USERS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                list: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;