import { GET_OWNERS_FRIDGES, GET_FRIDGE_RENT_INFO } from '../../actions';

const initialState = {
    fridges: [],
    rent_info: {}
}

export const ownerFridgesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case GET_OWNERS_FRIDGES: {
            return {
                ...state,
                fridges: payload,
            }
        }

        case GET_FRIDGE_RENT_INFO: {
            return {
                ...state,
                rent_info: payload,
            }
        }

        default: {
            return state;
        }
    }
}
