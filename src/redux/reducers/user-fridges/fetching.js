import axios from "axios";

import environment from '../../../env';
import { createSetFridgesAction,
         createUpdateProductCountAction,
         createGetAvailableFridgesAction, 
         createGetProductsInFridgeAction,
         createReturnFridgeAction,
         createDeleteProductAction,
         createRentFridgeAction,
         createAddProductInFridgeAction,
         } from "../../actions";

export function fetchProductUpdate({token, fridgeId, productId, count}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/${fridgeId}/products/${productId}`;

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }${fridgeId}/free`;

    return async (dispatch) => {
        try {
            const {data} = await axios.delete(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createReturnFridgeAction({ id: fridgeId }))

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/${fridgeId}/products/${productId}`;

    return async (dispatch) => {
        try {
            const {data} = await axios.delete(path,{
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createDeleteProductAction({ id: productId }))

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges`;

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/available`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createGetAvailableFridgesAction(data));

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/${fridgeId}/products`;

    return async (dispatch) => {
        try {
            const {data} = await axios.get(path, {
                headers: { Authorization: `bearer ${token}` }                
            })

            console.log(data);
            dispatch(createGetProductsInFridgeAction(data));

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

export function fetchStoredProcedureAddProductToFridges({ token, productId }, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/products/${productId}`;

    return async (dispatch) => {
        try {

            const {data} = await axios.post(path, {},{
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

export function fetchAddProductToFridge({token, fridgeId, productId ,count}, errorCallback, successCallback) {
    const { host, port, prefix, protocol } = environment;
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/${fridgeId}/products/${productId}`;

    return async (dispatch) => {
        try {

            const { data } = await axios.post(path, {count: Number(count)},{
                headers: { Authorization: `bearer ${token}` }                
            })
            
            dispatch(createAddProductInFridgeAction({ fridgeId, productId, count }))

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
    const path = `${protocol}://${host}:${port}/${prefix ? prefix + '/': '' }fridges/${fridgeId}/rent`;

    return async (dispatch) => {
        try {
            const {data} = await axios.put(path, null, {
                headers: { Authorization: `bearer ${token}` }                
            })

            dispatch(createRentFridgeAction({ id: fridgeId }))

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