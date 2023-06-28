import axios from 'axios';

import environment from '../../../env';
import { createGetOwnersFridgesAction, createRemoveFridgeAction } from "../../actions";

export function fetchRemoveFridge({token, fridgeId}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/${fridgeId}`;

    return async (dispatch) => {
        try {
            console.log(token, fridgeId);
            const {data} = await axios.delete(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createRemoveFridgeAction(fridgeId));

            if (successCallback) {
                successCallback();
            }
        } catch (error) {
            if (errorCallback) {
                errorCallback('Холодильник не был удален');
            }
        }
    }
}

export function fetchAddFridge({token, modelId, producerId, capacity}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges`;

    return async (dispatch) => {
        try {
            const {data} = await axios.post(path,{
                modelId,
                producerId,
                capacity: Number(capacity),
            }, {
                headers: { Authorization: `bearer ${token}` }                
            })

            console.log(modelId, producerId);
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

export function fetchAllOwnerFridges({token}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges`;

    return async (dispatch) => {
        try {
            
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createGetOwnersFridgesAction(data));

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
