import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import scss from './OwnerMainPage.module.scss';

import {AddFridge} from './AddFridge';
import { RentInfo } from './RentInfo/RentInfo';
import { DeleteFridge } from './DeleteFridge';

import { fetchAllOwnerFridges } from '../../../redux';

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

    const handleReturn = (id) => {
        setIsOpened((currentValue) => !currentValue);
        setFridgeId(id);
    }

    const handleReturnDelete = (id) => {
        setOnDelete((currentValue) => !currentValue)
        setFridgeId(id);
    }

    const handleClose = (e) => {
        if (e.currentTarget === e.target) {
            setIsOpened((currentValue) => !currentValue)
        }
    }

    const handleDelete = (e) => {
        if (e.currentTarget === e.target) {
            setOnDelete((currentValue) => !currentValue)
        }
    }

    const handleOpenModalNewFridge = () => {
        setNewFridgeModalView((currentValue) => !currentValue);
    }

    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            setNewFridgeModalView(false);
        }
    }

    return (<div className={scss.wrapper}>
        {
            isOpened && <RentInfo fridgeId={fridgeId} handleClose={handleClose} />
        }
        {
            onDelete && <DeleteFridge fridgeId={fridgeId} handleDelete={handleDelete}/>
        }
        {
            newFridgeModalView && <AddFridge handleCloseModal={handleCloseModal}/>
        }
        <div className={scss.content_wrapper}>
            <div className={scss.title}>
                <div className={ scss.text }>Ваши холодильники</div>
                <button onClick={() => handleOpenModalNewFridge()}>Добавить холодильник</button>
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
                                <button onClick={() => handleReturn(item.id)} disabled={!item.isRented} style={{ opacity: !item.isRented ? '60%': '100%' }}>Детали</button>
                                <button onClick={() => handleReturnDelete(item.id)} disabled={item.isRented} style={{ opacity: item.isRented ? '60%': '100%' }}>Удалить</button>
                            </div>
                        </td>
                    </tr>)
                }
            </table>
            {
                fridges.length === 0 && <h1 style={{ textAlign: 'center' }} className={ scss.title }>У вас нет холодильников...</h1>
            }
        </div>
    </div>
    )
}