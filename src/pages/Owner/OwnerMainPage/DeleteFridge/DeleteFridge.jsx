import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRemoveFridge } from '../../../../redux';

import scss from './DeleteFridge.module.scss';

export const DeleteFridge = ({ fridgeId, handleDelete }) => {
    
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user?.token || '');
    
    const handleFridgeDelete = () => {
        dispatch(fetchRemoveFridge({ token, fridgeId: fridgeId }))
    }

    return (<div className={scss.modalWindow} onClick={(e) => handleDelete(e)}>
        <div className={scss.modalForm}>
            <div>Вы уверены?</div>
            <div className={scss.buttons}>
                <button onClick={() => handleFridgeDelete()}>Да</button>
                <button onClick={(e) => handleDelete(e)}>Отмена</button>
            </div>
        </div>
    </div>)
}