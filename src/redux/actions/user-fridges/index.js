export const GET_USER_FRIDGES = Symbol.for('GET_USER_FRIDGES');
export const GET_AVAILABLE_FRIDGES = Symbol.for('GET_AVAILABLE_FRIDGES');
export const RENT_FRIDGE = Symbol.for('RENT_FRIDGE');
export const GET_PRODUCTS_IN_FRIDGE = Symbol.for('GET_PRODUCTS_IN_FRIDGE');
export const ADD_PRODUCT_IN_ALL_FRIDGES = Symbol.for('ADD_PRODUCT_IN_ALL_FRIDGES');
export const REMOVE_PRODUCT_FROM_FRIDGE = Symbol.for('REMOVE_PRODUCT_FROM_FRIDGE');

export const createSetFridgesAction = (payload = []) => {
    return {
        type: GET_USER_FRIDGES,
        payload
    }
}

export const getAvailableFridgesAction = (payload = []) => {
    return {
        type: GET_AVAILABLE_FRIDGES,
        payload
    }
}

export const getProductsInFridge = (payload = []) => {
    return {
        type: GET_PRODUCTS_IN_FRIDGE,
        payload
    }
}

export const rentFridge = (payload) => {
    return {
        type: RENT_FRIDGE,
        payload
    }
}

export const addProductInFridges = (payload) => {
    return {
        type: ADD_PRODUCT_IN_ALL_FRIDGES,
        payload
    }
}

export const removeProductFromFridge = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_FRIDGE,
        payload
    }
}
