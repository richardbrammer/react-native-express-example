import { USERS_ACTION_TYPES } from '../enums';
import { Action } from '../interfaces/action.interface';
import { User } from '../interfaces/user.interface';


/**
 * Action to dispatch, when list of users should be loaded from
 * the backend
 * @returns {Action} Type USERS_LOAD
 */
export function loadUsers(): Action {
    return {
        type: USERS_ACTION_TYPES.USERS_LOAD
    }
}


/**
 * Action to dispatch, when there was an error loading
 * the list of users from the backend
 * @returns {Action} Type USERS_LOAD_ERROR
 */
export function loadUsersError(): Action {
    return {
        type: USERS_ACTION_TYPES.USERS_LOAD_ERROR
    }
}


/**
 * Action to dispatched when loading of users was successful
 * @param users list of users
 * @returns {Action} Payload list of users Type USERS_LOAD_SUCCESS
 */
export function loadUsersSuccess(users: User[]): Action {
    return {
        type: USERS_ACTION_TYPES.USERS_LOAD_SUCCESS,
        payload: users
    }
}
