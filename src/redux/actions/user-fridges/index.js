export const GET_USER_FRIDGES = Symbol.for('GET_USER_FRIDGES');
export const GET_AVAILABLE_FRIDGES = Symbol.for('GET_AVAILABLE_FRIDGES');
export const RENT_FRIDGE = Symbol.for('RENT_FRIDGE');
export const GET_PRODUCTS_IN_FRIDGE = Symbol.for('GET_PRODUCTS_IN_FRIDGE');
export const ADD_PRODUCT_IN_ALL_FRIDGES = Symbol.for('ADD_PRODUCT_IN_ALL_FRIDGES');
export const REMOVE_PRODUCT_FROM_FRIDGE = Symbol.for('REMOVE_PRODUCT_FROM_FRIDGE');
export const UPDATE_PRODUCT_COUNT = Symbol.for('UPDATE_PRODUCT_COUNT');
export const DELETE_PRODUCT = Symbol.for('DELETE_PRODUCT');
export const RETURN_FRIDGE = Symbol.for('RETURN_FRIDGE');
export const ADD_PRODUCT_IN_FRIDGE = Symbol.for('ADD_PRODUCT_IN_FRIDGE');

export const createSetFridgesAction = (payload = []) => {
    return {
        type: GET_USER_FRIDGES,
        payload
    }
}

export const createGetAvailableFridgesAction = (payload = []) => {
    return {
        type: GET_AVAILABLE_FRIDGES,
        payload
    }
}

export const createGetProductsInFridgeAction = (payload = []) => {
    return {
        type: GET_PRODUCTS_IN_FRIDGE,
        payload
    }
}

export const createRentFridgeAction = (payload) => {
    return {
        type: RENT_FRIDGE,
        payload
    }
}

export const createSetProductInFridgesAction = (payload) => {
    return {
        type: ADD_PRODUCT_IN_ALL_FRIDGES,
        payload
    }
}

export const createRemoveProductFromFridgeAction = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_FRIDGE,
        payload
    }
}

export const createUpdateProductCountAction = (payload) => {
    return {
        type: UPDATE_PRODUCT_COUNT,
        payload
    }
}

export const createReturnFridgeAction = (payload) => {
    return {
        type: RETURN_FRIDGE,
        payload
    }
}

export const createAddProductInFridgeAction = (payload) => {
    return {
        type: ADD_PRODUCT_IN_FRIDGE,
        payload
    }
}


export const createDeleteProductAction = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload
    }
}