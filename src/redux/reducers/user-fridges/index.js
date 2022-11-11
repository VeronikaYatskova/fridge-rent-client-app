import { GET_USER_FRIDGES, 
         RENT_FRIDGE,
         GET_AVAILABLE_FRIDGES, 
         GET_PRODUCTS_IN_FRIDGE, 
         ADD_PRODUCT_IN_ALL_FRIDGES,
         REMOVE_PRODUCT_FROM_FRIDGE, 
         UPDATE_PRODUCT_COUNT} from "../../actions";

const initialState = {
    fridges: [],
    availableFridges: [],
    products: [],
}

/*
    fridges: [
        {
            id: string;
            model: string;
            owner: string,
            producer: string
        }
    ]
*/

export const userFridgesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case GET_USER_FRIDGES: {
            return {
                ...state,
                fridges: payload,
            }
        }

        case GET_AVAILABLE_FRIDGES: {
            return {
                ...state,
                availableFridges: payload
            }
        }

        case GET_PRODUCTS_IN_FRIDGE: {
            return {
                ...state,
                products: payload
            }
        }

        case RENT_FRIDGE: {
            return {
                ...state,
                fridges: [ ...state.fridges, payload ]
            }
        }

        case ADD_PRODUCT_IN_ALL_FRIDGES: {
            return {
                ...state,
            }
        }

        case REMOVE_PRODUCT_FROM_FRIDGE: {
            return {
                ...state,
            }
        }

        case UPDATE_PRODUCT_COUNT: {
            const { id, count } = payload;
            const product = state.products.find((product) => product.id === id);
            if (product) {
                product.count = count
            }
            return state;
        }


        default: {
            return state;
        }
    }
}
