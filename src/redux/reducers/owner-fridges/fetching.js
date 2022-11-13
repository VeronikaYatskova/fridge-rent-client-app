import axios from 'axios';

import environment from '../../../env';
import { getOwnersFridges, getFridgeRentInfo, createRemoveFridgeAction } from "../../actions";

export function fetchRemoveFridge({token, fridgeId}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }owner/fridge/${fridgeId}/remove`;

    return async (dispatch) => {
        try {
            console.log(token, fridgeId);
            const {data} = await axios.delete(path,{
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createRemoveFridgeAction({id: fridgeId}));

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }owner/fridge/add`;

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }owner/fridges`;

    return async (dispatch) => {
        try {
            
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(getOwnersFridges(data));

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

export function fetchFridgeRentInfo({token, fridgeId}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }owner/fridge/${fridgeId}/rent-info`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(getFridgeRentInfo(data));

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

