import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import scss from './OwnerMainPage.module.scss';
import {AddFridge} from './AddFridge';
import { fetchAllOwnerFridges, fetchFridgeRentInfo, fetchRemoveFridge } from '../../../redux';
import { RentInfo } from './RentInfo/RentInfo';

export const OwnerMainPage = () => {

    const dispatch = useDispatch();
    const fridges = useSelector((state) => state.ownerFridge.fridges);
    const token = useSelector((state) => state.auth.user?.token || '');
    const [fridgeId, setFridgeId] = useState('');

    useEffect(() => {
        dispatch(fetchAllOwnerFridges({ token }));
    }, [])
    
    const [isOpened, setIsOpened] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const [newFridgeModalView, setNewFridgeModalView] = useState(false);

    const handleClickReturn = (id) => {
        setIsOpened((currentValue) => !currentValue);
        setFridgeId(id);
    }

    const handleClickReturnDelete = (id) => {
        setOnDelete((currentValue) => !currentValue)
        setFridgeId(id);
    }

    const handleClickClose = (e) => {
        if (e.currentTarget === e.target) {
            setIsOpened((currentValue) => !currentValue)
        }
    }

    const handleClickDelete = (e) => {
        if (e.currentTarget === e.target) {
            setOnDelete((currentValue) => !currentValue)
        }
    }
    const handleClickOpenModalViewNewFridge = () => {
        setNewFridgeModalView((currentValue) => !currentValue);
    }

    const handleClickCloseModalWindow = (e) => {
        if (e.target === e.currentTarget) {
            setNewFridgeModalView(false);
        }
    }

    const handleFridgeDelete = () => {
        dispatch(fetchRemoveFridge({ token, fridgeId: fridgeId }))
    }

    return (<div className={scss.wrapper}>
        {
            isOpened && <RentInfo fridgeId={fridgeId} handleClickClose={handleClickClose} />
        }
        {
            onDelete &&
            <div className={scss.modalWindow} onClick={(e) => handleClickDelete(e)}>
                <div className={scss.modalForm}>
                    <div>Вы уверены?</div>
                    <div className={scss.buttonsDeleteFridge}>
                        <button onClick={() => handleFridgeDelete()}>Да</button>
                        <button onClick={(e) => handleClickDelete(e)}>Отмена</button>
                    </div>
                </div>
            </div>
        }
        <div className={scss.content_wrapper}>
            <div className={scss.title}>
                <div className={ scss.text }>Ваши холодильники</div>
                <button onClick={() => handleClickOpenModalViewNewFridge()} className={scss.addFridgeButton}>Добавить холодильник</button>
            </div>
            <table className={scss.table_fridge}>
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Модель</th>
                    <th scope="col">Статус</th>
                    <th></th>
                    </tr>
                </thead>
                {
                    fridges.map(item => 
                    <tr>
                        <th>
                            {item.id}
                        </th>
                        <td>{item.model}</td>
                        <td className={scss.actions}>                             
                            <div>{item.isRented ? 'Арендован': 'Свободен'}</div>
                            <div className={scss.buttons}>
                                <button onClick={() => handleClickReturn(item.id)} disabled={!item.isRented} style={{ opacity: !item.isRented ? '60%': '100%' }}>Детали</button>
                                <button onClick={() => handleClickReturnDelete(item.id)} disabled={item.isRented} style={{ opacity: item.isRented ? '60%': '100%' }}>Удалить</button>
                            </div>
                        </td>
                    </tr>)
                }
            </table>
        </div>
        {
            newFridgeModalView && 
            <div className={scss.modalWindow} onClick={(e) => handleClickCloseModalWindow(e)}>
                <AddFridge/>
            </div>
        }
    </div>
    )
}