import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import scss from './AddProduct.module.scss'
import { fetchAddProductToFridge, fetchAllProducts } from "../../../../redux";
import { useParams } from 'react-router-dom';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minCountError, setMinCounthError] = useState(false);
    const [maxCountError, setMaxCountError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
       for (const validation in validations) {
           switch (validation) {
                case 'minCount':
                    value.length < validations[validation] ? setMinCounthError(true) : setMinCounthError(false);
                    break;
                case 'maxCount':
                    value.length > validations[validation] ? setMaxCountError(true) : setMaxCountError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
           }
       }
    }, [value])

    useEffect(() =>{
        if (isEmpty || minCountError || maxCountError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minCountError, maxCountError])

    return {
        isEmpty,
        minCountError,
        maxCountError,
        inputValid,
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setDirty(true);
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}

export const AddProduct = () => {
    const [productId, setProductId] = useState('')

    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const token = useSelector((state) => state.auth.user?.token || '');

    const count = useInput(0, {isEmpty: true, maxCount: 100, minCount: 20 });

    useEffect(() => {
        dispatch(fetchAllProducts({ token }));
    }, [])

    const handleChange = (event) => {
        setProductId(event.target.value)
    }

    const handleClickAddProduct = () => {
        const { fridgeId } = params
        const prodId = productId || products[0]?.id;
        dispatch(fetchAddProductToFridge({ count: count.value, fridgeId, productId: prodId, token }));
    }

    return (
        <div className={scss.wrapper}>
            <h1>Добавить новый продукт</h1>
            <div className={scss.inputText}>
                <select onChange={handleChange}>
                    {   
                        products.map((item) => <option value={item.id} key={item.id}>{ item.name }</option>)
                    }
                </select>
            </div>
            <div className={scss.inputText}>
                <input onChange={e => count.onChange(e)} onBlur={e => count.onBlur(e)} value={count.value} type='number' name='count' placeholder='Количество'/>
            </div>
            <div className={scss.formButton}>
                <button onClick={() => handleClickAddProduct()}>
                    Добавить
                </button>
            </div>
        </div>
    )
}
