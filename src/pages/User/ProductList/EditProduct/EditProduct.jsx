import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProductUpdate } from "../../../../redux";

import scss from './EditProduct.module.scss'

export const EditProduct = ({fridgeId, productId}) => {
    
    const [count, setValue] = useState('');

    const onChange = (e) => {
        setValue(Number(e.target.value));
    }

    const dispatch = useDispatch();
    
    const token = useSelector((state) => state.auth.user?.token || '');

    const handleProductUpdate = () => {
        dispatch(fetchProductUpdate({token, fridgeId, productId, count: count }));
    }
    
    return (
        <div className={scss.wrapper}>
            <h1>Редактировать продукт</h1>
            <div className={scss.inputText}>
                <input onChange={e => onChange(e)} value={count} type='number' placeholder='Количество'/>
            </div>
            <div className={scss.formButton}>
                <button onClick={() => handleProductUpdate()}>
                    Обновить
                </button>
            </div>
        </div>
    )
}
