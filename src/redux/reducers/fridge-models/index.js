import { GET_ALL_MODELS } from '../../actions';

const initialState = {
    models: [],
}

export const modelsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case GET_ALL_MODELS: {
            return {
                ...state,
                models: payload,
            }
        }

        default: {
            return state;
        }
    }
}
