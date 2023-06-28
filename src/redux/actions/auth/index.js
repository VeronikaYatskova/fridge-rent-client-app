const LOGIN = 'LOGIN';
const REGISTRATION = 'REGISTRATION';
const SIGNOUT = 'SIGNOUT';
const GOOGLEREGISTRATION = 'GOOGLEREGISTRATION'; 
const VKREGISTRATION = 'VKREGISTRATION';

const createLoginAction = (payload = { email: 'joe', isOwner: false }) => {
    return {
        payload,
        type: LOGIN
    }
}

const createRegistrationAction = (payload = { login: 'joe', password: 'doe', isOwner: false }) => {
    return {
        payload,
        type: REGISTRATION
    }
}

const createSignOutAction = () => {
    return {
        type: SIGNOUT
    }
}

const createGoogleRegistrationAction = (payload = {code: '', isOwner: false }) => {
    return {
        payload,
        type: GOOGLEREGISTRATION
    }
}

const createVkRegistrationAction = (payload) => {
    return {
        payload,
        type: VKREGISTRATION
    }
}



export {
    LOGIN,
    REGISTRATION,
    SIGNOUT,
    GOOGLEREGISTRATION,
    VKREGISTRATION,
    createLoginAction,
    createSignOutAction,
    createRegistrationAction,
    createGoogleRegistrationAction,
    createVkRegistrationAction
}
