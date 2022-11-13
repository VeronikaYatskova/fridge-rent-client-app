export const GET_ALL_PRODUCTS = Symbol.for('GET_ALL_PRODUCTS');

export const createGetAllProductsAction = (payload = []) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload
    }
}
