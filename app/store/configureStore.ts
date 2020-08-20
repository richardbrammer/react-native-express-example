import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/usersReducer';

/**
 * combine all the existing reducers to a single store
 * in this example we only have usersReducer
 */
const rootReducer = combineReducers({ 
    users: usersReducer 
});

const middlewares = [thunk];

const configureStore = () => {
    return createStore(rootReducer, {}, applyMiddleware(...middlewares));
}

export default configureStore;