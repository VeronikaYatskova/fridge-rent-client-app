import axios from 'axios';

import environment from '../../../env';
import { getProducers } from "../../actions";

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

export function fetchAddProductToFridge({token, fridgeId, productId, count}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }products-in-fridge/product/new`;

    return async (dispatch) => {
        try {

            const {data} = await axios.post(path, {
                productId,
                fridgeId,
                count: Number(count)
            },{
                headers: { Authorization: `bearer ${token}` }                
            })


            if (successCallback) {
                successCallback();
            }
        } catch (error) {
            if (errorCallback) {
                errorCallback('Продукт не был добавлен');
            }
        }
    }
}
