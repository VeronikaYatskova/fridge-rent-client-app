import { GET_USER_FRIDGES, 
         RENT_FRIDGE,
         GET_AVAILABLE_FRIDGES, 
         GET_PRODUCTS_IN_FRIDGE, 
         ADD_PRODUCT_IN_ALL_FRIDGES,
         REMOVE_PRODUCT_FROM_FRIDGE, 
         UPDATE_PRODUCT_COUNT,
         DELETE_PRODUCT,
         RETURN_FRIDGE,
         ADD_PRODUCT_IN_FRIDGE} from "../../actions";

const initialState = {
    fridges: [],
    availableFridges: [],
    products: [],
}

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
            const { id } = payload;
            return {
                ...state,
                availableFridges: state.availableFridges.filter((fridge) => fridge.id !== id)
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

        case DELETE_PRODUCT: {
            const { id } = payload;
            return {
                ...state,
                products: state.products.filter((product) => product.id !== id)
            }
        }

        case RETURN_FRIDGE: {
            const { id } = payload;
            const currentFridges = state.fridges.filter((fridge) => fridge.id !== id);
            return {
                ...state,
                fridges: currentFridges
            }
        }

        case ADD_PRODUCT_IN_FRIDGE: {
            const { fridgeId, productName, count } = payload; 
            var newProduct = {
                id: fridgeId,
                name: productName,
                count: count
            }
            
            console.log(newProduct);
            return {
                ...state,
                products: state.products.push(newProduct)
            }
               
        }

        default: {
            return {
             ...state
            }
        }
    }
}
