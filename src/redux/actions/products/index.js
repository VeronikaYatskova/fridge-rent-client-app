export const GET_ALL_PRODUCTS = Symbol.for('GET_ALL_PRODUCTS');

export const getAllProducts = (payload = []) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload
    }
}
