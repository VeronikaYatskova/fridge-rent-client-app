export const GET_ALL_PRODUCERS =Symbol.for('GET_ALL_PRODUCERS');

export const createGetProducersAction = (payload = []) => {
    return {
        type: GET_ALL_PRODUCERS,
        payload
    }
}