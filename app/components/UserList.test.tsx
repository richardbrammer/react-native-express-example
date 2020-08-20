import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import renderer from 'react-test-renderer';
import { enableFetchMocks } from 'jest-fetch-mock'

import UserList from './UserList';
import usersReducer from '../reducers/usersReducer';


/** avoid async calls to the backend API in useEffect */
enableFetchMocks()

const rootReducer = combineReducers({ 
    users: usersReducer 
});

describe('<UserList />', () => {
    it('renders Loading...', () => {
        const mockStore = createStore(rootReducer, { users: {
            list: null,
            loading: true,
            error: null
        }});

        const tree = renderer.create(
            <Provider store={mockStore}>
                <UserList></UserList>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});