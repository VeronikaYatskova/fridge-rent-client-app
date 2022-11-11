import { GET_ALL_PRODUCTS } from '../../actions';

const initialState = {
    products: [],
}

export const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                products: payload,
            }
        }

        default: {
            return state;
        }
    }
}
