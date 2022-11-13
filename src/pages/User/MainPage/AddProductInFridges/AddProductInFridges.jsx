import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import scss from './AddProductInFridges.module.scss'
import { fetchStoredProcedureAddProductToFridges, fetchAllProducts } from "../../../../redux";

export const AddProductInFridges = ({handleptaClickClose, setProductToAdd}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user?.token || '');
    const [productId, setProductId] = useState('')
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchAllProducts({ token }));
    }, [])

    const handleAddProductInFridges = () => {
        dispatch(fetchStoredProcedureAddProductToFridges({ productId, token }));
        setProductToAdd((currentValue) => !currentValue);
    }

    const handleChange = (event) => {
        setProductId(event.target.value)
    }

    return (
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
    )
}
