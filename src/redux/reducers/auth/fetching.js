import axios from 'axios';
import { createLoginAction, createRegistrationAction } from '../../actions';

import environment from '../../../env';

export const fetchLoginUser = ({ email, password, isOwner }, errorCallback, successCallback) => {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }authorization/${ isOwner ? 'owner': 'user' }/login`;
    return async (dispath) => {
        try {
            console.log(path);
            const { data } = await axios.post(path, {
                email, password
            });

            dispath(createLoginAction({ token: data, isOwner }));

            successCallback()
        } catch (error) {
            errorCallback('Неверный логин или пароль');
        }
    }
}

export const fetchRegistrationUser = ({ email, password, isOwner, name, phone }, errorCallback, successCallback) => {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }authorization/${ isOwner ? 'owner': 'user' }/register`;

    return async (dispath) => {
        try {

            const body = {
                email, password
            };

            if (isOwner) {
                body.name = name;
                body.phone = phone;
            }

            const { data } = await axios.post(path, body)

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