export const GET_ALL_MODELS =Symbol.for('GET_ALL_MODELS');

export const getModels = (payload = []) => {
    return {
        type: GET_ALL_MODELS,
        payload
    }
}