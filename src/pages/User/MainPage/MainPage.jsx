import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchAllUserFridges, fetchAddProductToFridges, fetchAllProducts, fetchReturnFridge } from "../../../redux";

import scss from './MainPage.module.scss';

export const MainPage = () => {
    
    const dispatch = useDispatch();
    const fridges = useSelector((state) => state.userFridge.fridges);
    const token = useSelector((state) => state.auth.user?.token || '');
    const [isOpened, setIsOpened] = useState(false);
    const [productToAdd, setProductToAdd] = useState(false);
    const [productId, setProductId] = useState('')
    const [fridgeId, setFridgeId] = useState('')

    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchAllUserFridges({ token }));
        dispatch(fetchAllProducts({ token }));
    }, [])

    const handleAddProductInFridges = () => {
        dispatch(fetchAddProductToFridges({ productId, token }));
        setProductToAdd((currentValue) => !currentValue);
    }

    const handleChange = (event) => {
        setProductId(event.target.value)
    }

    const handleClick = () => {
        setProductToAdd((currentValue) => !currentValue)
        setIsOpened((currentValue) => !currentValue)
    }

    const handleClickReturn = (selectedFridge) => {
        setIsOpened((currentValue) => !currentValue)
        setFridgeId(selectedFridge);
    }

    const handleClickReturnFridge = () => {
        dispatch(fetchReturnFridge({ token, fridgeId }));
        setIsOpened((currentValue) => !currentValue)
    }

    const handleClickClose = (e) => {
        if (e.currentTarget === e.target) {
            setIsOpened((currentValue) => !currentValue);
        }
    }

    const handleptaClickClose = (e) => {
        if (e.currentTarget === e.target) {
            setProductToAdd((currentValue) => !currentValue);
        }
    }

    return (
        <div className={scss.wrapper}>
            {
                isOpened &&
                <div className={scss.modalWindow} onClick={(e) => handleClickClose(e)}>
                    <div className={scss.modalForm}>
                        <div>Вы уверены?</div>
                        <div className={scss.buttons}>
                            <button onClick={() => handleClickReturnFridge()}>Да</button>
                            <button onClick={(e) => handleClickClose(e)}>Отмена</button>
                        </div>
                    </div>
                </div>
            }
            {
                productToAdd &&
                <div className={scss.modalWindow} onClick={(e) => handleptaClickClose(e)}>
                    <div className={scss.modalForm}>
                        <div>Выберите продукт</div>
                        <div className={scss.inputText}>
                            <select onChange={handleChange}>
                                {   
                                    products.map((item) => <option value={item.id} key={item.id}>{ item.name }</option>)
                                }
                            </select>
                        </div>
                        <div className={scss.buttons}>
                            <button onClick={() => handleAddProductInFridges()}>Да</button>
                            <button onClick={(e) => handleptaClickClose(e)}>Отмена</button>
                        </div>
                    </div>
                </div>
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
                            <td><Link to={`/user/${item.id}/product-list`}>Открыть</Link></td>
                            <td><a onClick={() => handleClickReturn(item.id)}>Вернуть</a></td>
                        </tr>)
                    }
                </table>
                <h1>Кнопка добавляет продукт, в холодильники, где его нет</h1>
                <button onClick={() => handleClick()}>Добавить</button>
            </div>
        </div>
    )
}