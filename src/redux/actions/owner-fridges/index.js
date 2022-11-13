export const GET_OWNERS_FRIDGES = Symbol.for('GET_OWNERS_FRIDGES');
export const GET_FRIDGE_RENT_INFO = Symbol.for('GET_FRIDGE_RENT_INFO');
export const REMOVE_FRIDGE = Symbol.for('REMOVE_FRIDGE');

export const getOwnersFridges = (payload = []) => {
    return {
        type: GET_OWNERS_FRIDGES,
        payload
    }
}

export const getFridgeRentInfo = (payload = []) => {
    return {
        type: GET_FRIDGE_RENT_INFO,
        payload
    }
}

export const createRemoveFridgeAction = (payload = []) => {
    return {
        type: REMOVE_FRIDGE,
        payload
    }
}