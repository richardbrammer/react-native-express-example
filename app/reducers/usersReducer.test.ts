import { State, initialState } from './usersReducer';
import usersReducer from './usersReducer';
import { USERS_ACTION_TYPES } from '../enums';
import { loadUsersSuccess } from '../actions/users';

describe('usersReducer', () => {

    it('should set state to loading', () => {
        let state: State = initialState;
        const newState = usersReducer(state, { type: USERS_ACTION_TYPES.USERS_LOAD });
        expect(newState.loading).toBe(true);
        expect(newState.error).toBe(null);
    });

    it('should set state to error', () => {
        let state: State = {
            loading: true,
            error: null,
            list: null
        };
        const newState = usersReducer(state, { type: USERS_ACTION_TYPES.USERS_LOAD_ERROR });
        expect(newState.loading).toBe(false);
        expect(newState.error).not.toBe(null);
        expect(newState.list).toBe(null);
    });

    it('should add user list to to state', () => {
        let state: State = {
            loading: true,
            error: null,
            list: null
        };
        const newState = usersReducer(state, { 
            type: USERS_ACTION_TYPES.USERS_LOAD_SUCCESS, 
            payload: [{ name: 'Richard Brammer', id: '1', avatar: 'http://localhost'}] 
        });
        expect(newState.loading).toBe(false);
        expect(newState.error).toBe(null);
        expect(newState.list).not.toBe(null);
        expect(newState.list?.length).toBe(1);
    });

});