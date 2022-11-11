import { applyMiddleware, legacy_createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducer  } from "./reducers";

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export * from './actions';
export * from './reducers/auth/fetching';
export * from './reducers/user-fridges/fetching';
export * from './reducers/owner-fridges/fetching';
export * from './reducers/products/fetching';
export * from './reducers/fridge-models/fetching';
export * from './reducers/fridge-producers/fetching';