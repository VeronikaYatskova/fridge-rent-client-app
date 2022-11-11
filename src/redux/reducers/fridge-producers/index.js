import { GET_ALL_PRODUCERS } from '../../actions';

const initialState = {
    producers: [],
}

export const producersReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case GET_ALL_PRODUCERS: {
            return {
                ...state,
                producers: payload,
            }
        }
        
        default: {
            return state;
        }
    }
}
