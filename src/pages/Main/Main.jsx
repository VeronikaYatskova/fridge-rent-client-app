import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableFridges, fetchRentFridge } from "../../redux";
import { useParams } from 'react-router-dom';

import scss from './Main.module.scss';

export const Main = () => {

    const dispatch = useDispatch();
    const availableFridges = useSelector((state) => state.userFridge.availableFridges);
    const token = useSelector((state) => state.auth.user?.token || '');

    useEffect(() => {
        dispatch(fetchAvailableFridges(token));
    }, []);

    const handleClickRentFridge = (fridgeId) => {
        dispatch(fetchRentFridge({ token, fridgeId }));
    }

    return (<div className={scss.wrapper}>
        <h1 className={ scss.title }>Доступные холодильники</h1>
        <table className={scss.table_fridge}>
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Модель</th>
                <th scope="col">Владелец</th>
                <th scope="col">Производитель</th>
                <th></th>
                </tr>
            </thead>
            {
                availableFridges.map(item => 
                <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.model}</td>
                    <td>{item.owner}</td>
                    <td>{item.producer}</td>
                    <td><button onClick={() => handleClickRentFridge(item.id)}>Арендовать</button></td>
                </tr>)
            }
        </table>
    </div>)
}
