import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchAllUserFridges } from "../../../redux";

import { ReturnFridge } from "./ReturnFridge";
import { AddProductInFridges } from "./AddProductInFridges/AddProductInFridges";

import scss from './MainPage.module.scss';

export const MainPage = () => {
    
    const dispatch = useDispatch();
    const fridges = useSelector((state) => state.userFridge.fridges);
    const token = useSelector((state) => state.auth.user?.token || '');
    const [isOpened, setIsOpened] = useState(false);
    const [fridgeId, setFridgeId] = useState('')
    const [productToAdd, setProductToAdd] = useState(false);

    useEffect(() => {
        dispatch(fetchAllUserFridges({ token }));
    }, [])


    const handleClick = () => {
        setProductToAdd((currentValue) => !currentValue)
    }

    const handleClickReturn = (selectedFridge) => {
        setIsOpened((currentValue) => !currentValue)
        setFridgeId(selectedFridge);
    }

    const handleptaClickClose = (e) => {
        if (e.currentTarget === e.target) {
            setProductToAdd((currentValue) => !currentValue);
        }
    }
    
    return (
        <div className={scss.wrapper}>
            {
                isOpened && <ReturnFridge fridgeId={fridgeId} setIsOpened={setIsOpened}/>
            }
            {
                productToAdd && <AddProductInFridges handleptaClickClose={handleptaClickClose} setProductToAdd={setProductToAdd}/>
            }
            <div>
                <h1 className={ scss.title }>Арендованные холодильники</h1>
                <table className={scss.table_fridge}>
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Модель</th>
                        <th scope="col">Владелец</th>
                        <th scope="col">Производитель</th>
                        <th scope="col">Вместительность</th>
                        <th scope="col">Количество продуктов</th>
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
                            <td>{item.owner}</td>
                            <td>{item.producer}</td>
                            <td>{item.capacity}</td>
                            <td>{item.currentCount}</td>
                            <td><Link to={`/user/${item.id}/product-list`}><button>Открыть</button></Link></td>
                            <td><button onClick={() => handleClickReturn(item.id)}>Вернуть</button></td>
                        </tr>)
                    }
                </table>
                {
                    fridges.length === 0 && <h1 className={ scss.title }>У вас нет арендованных холодильников</h1>
                }
                <h1>Кнопка добавляет продукт, в холодильники, где его нет</h1>
                <button onClick={() => handleClick()}>Добавить</button>
            </div>
        </div>
    )
}
