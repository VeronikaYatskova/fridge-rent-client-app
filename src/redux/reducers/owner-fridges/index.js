import { GET_OWNERS_FRIDGES, GET_FRIDGE_RENT_INFO, REMOVE_FRIDGE } from '../../actions';

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

        case REMOVE_FRIDGE: {
            const { id } = payload;
            const currentFridges = state.fridges.filter((fridge) => fridge.id !== id);
            return {
                ...state,
                fridges: currentFridges
            }
        }

        default: {
            return state;
        }
    }
}
