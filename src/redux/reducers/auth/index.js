import { LOGIN, REGISTRATION, SIGNOUT } from "../../actions";

const LOCAL_STORAGE_USER_INDEX = 'FridgeRentUser'

const initialState = {
    user: JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_INDEX)) || null
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LOGIN: {
            localStorage.setItem(LOCAL_STORAGE_USER_INDEX, JSON.stringify(payload));
            return { user: { ...payload } };
        }
        
        case REGISTRATION: {
            localStorage.setItem(LOCAL_STORAGE_USER_INDEX, JSON.stringify(payload))
            return { user: { ...payload } };
        }

        case SIGNOUT: {
            localStorage.removeItem(LOCAL_STORAGE_USER_INDEX);
            return { ...state, user: null };
        }

        default: return state;
    }
}


export { authReducer };