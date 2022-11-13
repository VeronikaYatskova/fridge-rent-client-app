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
                    Number(value) < validations[validation] ? setMinCounthError(true) : setMinCounthError(false);
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

export const AddProduct = ({handleCloseModalWindow}) => {
    const [productId, setProductId] = useState('')
    // const [productName, setProductName] = useState('')

    const params = useParams();
    const { fridgeId } = params
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const token = useSelector((state) => state.auth.user?.token || '');

    const count = useInput(0, {isEmpty: true, minCount: 0 });

    useEffect(() => {
        dispatch(fetchAllProducts({ token }));
    }, [])

    const handleChange = (event) => {
        setProductId(event.target.value)

        // const { name } = products.find(p => p.id == event.target.value);
        // setProductName(name);
    }

    const handleClickAddProduct = () => {
        const prodId = productId || products[0]?.id;
        dispatch(fetchAddProductToFridge({ count: count.value, fridgeId, productId: prodId, token }));
    }

    return (
        <div className={scss.modalWindow} onClick={(e) => handleCloseModalWindow(e)}>
            <div className={scss.modalForm}>
                <h1>Добавить новый продукт</h1>
                <div className={scss.inputText}>
                    <select onChange={handleChange}>
                        {   
                            products.map((item) => <option value={item.id} key={item.id}>{ item.name }</option>)
                        }
                    </select>
                </div>
                {(count.isDirty && count.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                {(count.isDirty && count.minCountError) && <div style={{color: 'red'}}>Значение должно быть больше либо равно нулю</div>}
                <div className={scss.inputText}>
                    <input onChange={e => count.onChange(e)} onBlur={e => count.onBlur(e)} value={count.value} type='number' name='count' placeholder='Количество'/>
                </div>
                <div className={scss.formButton}>
                    <button disabled={ !count.inputValid } onClick={() => handleClickAddProduct()}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}
