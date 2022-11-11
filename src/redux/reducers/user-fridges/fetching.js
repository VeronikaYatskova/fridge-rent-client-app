import axios from "axios";

import environment from '../../../env';
import { createSetFridgesAction,
         createUpdateProductCountAction,
         getAvailableFridgesAction, 
         getProductsInFridge,
         } from "../../actions";

export function fetchProductUpdate({token, fridgeId, productId, count}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }products-in-fridge/product/update`;

    return async (dispatch) => {
        try {
            console.log({
                fridgeId, productId, count
            })
            const {data} = await axios.put(path,{
                fridgeId,
                productId,
                count
            }, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createUpdateProductCountAction({ id: productId, count }))

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

export function fetchReturnFridge({token, fridgeId}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }rent/fridge/${fridgeId}/return`;

    return async (dispatch) => {
        try {
            const {data} = await axios.delete(path,{
                headers: { Authorization: `bearer ${token}` }                
            })

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

export function fetchRemoveProductFromFridge({token, fridgeId, productId}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }products-in-fridge/${fridgeId}/${productId}`;

    return async (dispatch) => {
        try {
            const {data} = await axios.delete(path,{
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

export function fetchAllUserFridges({ token }, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }rent/fridges/rented`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createSetFridgesAction(data));

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

export function fetchAvailableFridges({ token }, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/available-fridges`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            console.log({ data });

            dispatch(getAvailableFridgesAction(data));

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

export function fetchProductsInFridge({ token, fridgeId }, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }products-in-fridge/fridge/${fridgeId}`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            console.log({ data });

            dispatch(getProductsInFridge(data));

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

export function fetchAddProductToFridges({ token, productId }, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }products-in-fridge/product/${productId}/put-in-all-fridges`;

    return async (dispatch) => {
        try {

            const {data} = await axios.post(path, {},{
                headers: { Authorization: `bearer ${token}` }                
            })

            console.log(data);
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

export function fetchRentFridge({token, fridgeId}, errorCallback, successCallback) {
    console.log({ token, fridgeId })
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }rent/fridge/${fridgeId}/rent`;

    return async (dispatch) => {
        try {
            const {data} = await axios.post(path,{}, {
                headers: { Authorization: `bearer ${token}` }                
            })

            console.log(data);
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