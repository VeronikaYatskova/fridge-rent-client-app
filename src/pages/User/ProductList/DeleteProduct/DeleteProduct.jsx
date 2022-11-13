import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRemoveProductFromFridge } from '../../../../redux';

import scss from './DeleteProduct.module.scss';

export const DeleteProduct = ({ fridgeGuid,  selectedProduct, setDeleteProductModalView, handleCloseModalWindow}) => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user?.token || '');

    const handleProductDelete = () => {
        dispatch(fetchRemoveProductFromFridge({ token, fridgeId: fridgeGuid, productId: selectedProduct}));
        setDeleteProductModalView(false);
    }

    return (<div className={scss.modalWindow} onClick={(e) => handleCloseModalWindow(e)}>
                <div className={scss.modalForm}>
                    <h1>Вы уверены?</h1>
                    <div className={scss.buttons}>
                        <button onClick={() => handleProductDelete()}>Да</button>
                        <button onClick={(e) => handleCloseModalWindow(e)}>Отмена</button>
                    </div>
                </div>
            </div>);
}