import axios from 'axios';

import environment from '../../../env';
import { createAddProductInFridgeAction, getProducers } from "../../actions";

export function fetchAllProducers({token}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/available-producers`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(getProducers(data));

            if (successCallback) {
                successCallback();
            }
        } catch (error) {
            if (errorCallback) {
                errorCallback('Ошибка');
            }
        }
    }
}