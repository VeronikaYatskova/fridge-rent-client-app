const LOGIN = Symbol.for('LOGIN');
const REGISTRATION = Symbol.for('REGISTRATION');
const SIGNOUT = Symbol.for('SIGNOUT');

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



export {
    LOGIN,
    REGISTRATION,
    SIGNOUT,
    createLoginAction,
    createSignOutAction,
    createRegistrationAction
}