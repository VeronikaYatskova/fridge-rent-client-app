import axios from 'axios';
import { createLoginAction, createRegistrationAction, createGoogleRegistrationAction, createVkRegistrationAction } from '../../actions';

import environment from '../../../env';

export const fetchLoginUser = ({ email, password, isOwner }, errorCallback, successCallback) => {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }auth/sign-in/`;
    return async (dispath) => {
        try {
            console.log(path);
            const { data } = await axios.post(path, {
                email, password, isOwner
            });

            dispath(createLoginAction({ token: data, isOwner }));

            successCallback()
        } catch (error) {
            errorCallback('Неверный логин или пароль');
        }
    }
}

export const fetchRegistrationUser = ({ email, password, isOwner }, errorCallback, successCallback) => {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }auth/sign-up`;

    return async (dispath) => {
        try {
            const { data } = await axios.post(path, { email, password, isOwner })

            dispath(createRegistrationAction({ token: data, isOwner }));

            successCallback()
        } catch (error) {
            if (error.response.status === 400) {
                errorCallback('Пользователь с данной почтой уже существует...')
            } else
            errorCallback('Неверный логин или пароль');
        }
    }
}

export const fetchGoogleRegistrationUser = ({code, isOwner}, errorCallback, successCallback) => {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }auth/google/sing-up`;

    return async (dispath) => {
        try {
            const { data } = await axios.post(path, {code, isOwner})
            
            dispath(createGoogleRegistrationAction({ token: data, isOwner }));

            successCallback()
        } catch (error) {
            if (error.response.status === 400) {
                errorCallback('Пользователь с данной почтой уже существует...')
            } else
                errorCallback('Неверный логин или пароль');
        }
    }
}

export const fetchVkRegistrationUser = ({code, isOwner}, errorCallback, successCallback) => {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }auth/vk/sign-up`;

    return async (dispath) => {
        try {
            const { data } = await axios.post(path, {code, isOwner})
            
            dispath(createVkRegistrationAction({ token: data, isOwner }));

            successCallback()
        } catch (error) {
            if (error.response.status === 400) {
                errorCallback('Пользователь с данной почтой уже существует...')
            } else
                errorCallback('Неверный логин или пароль');
        }
    }
}
