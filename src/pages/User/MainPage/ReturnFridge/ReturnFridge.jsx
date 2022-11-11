import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchReturnFridge } from '../../../../redux';

import scss from './ReturnFridge.module.scss';

export const ReturnFridge = ({fridgeId, setIsOpened}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user?.token || '');

    const handleClickReturnFridge = () => {
        dispatch(fetchReturnFridge({ token, fridgeId }));
        setIsOpened(false)
    }

    const handleClickClose = (e) => {
        if (e.currentTarget === e.target) {
            setIsOpened(false);
        }
    }
    
    return (
        <div className={scss.modalWindow} onClick={(e) => handleClickClose(e)}>
            <div className={scss.modalForm}>
                <div>Вы уверены?</div>
                <div className={scss.buttons}>
                    <button onClick={() => handleClickReturnFridge()}>Да</button>
                    <button onClick={(e) => handleClickClose(e)}>Отмена</button>
                </div>
            </div>
        </div>
    )
}
