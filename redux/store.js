import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const initialState = {};
const middleware = [thunk];

// apply middleware for Async firebase operations in task Actions
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;