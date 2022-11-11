import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { userFridgesReducer } from './user-fridges';
import { ownerFridgesReducer } from './owner-fridges';
import { productsReducer } from './products';
import { modelsReducer } from './fridge-models';
import { producersReducer} from './fridge-producers';

const rootReducer = combineReducers({
    auth: authReducer,
    userFridge: userFridgesReducer,
    ownerFridge: ownerFridgesReducer,
    products: productsReducer,
    models: modelsReducer,
    producers: producersReducer, 
})

export { rootReducer }