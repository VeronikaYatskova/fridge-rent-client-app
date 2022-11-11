export const GET_ALL_PRODUCERS =Symbol.for('GET_ALL_PRODUCERS');
export const UPDATE_PRODUCT_COUNT = Symbol.for('UPDATE_PRODUCT_COUNT');

export const getProducers = (payload = []) => {
    return {
        type: GET_ALL_PRODUCERS,
        payload
    }
}

export const createUpdateProductCountAction = (payload) => {
    return {
        type: UPDATE_PRODUCT_COUNT,
        payload
    }
}