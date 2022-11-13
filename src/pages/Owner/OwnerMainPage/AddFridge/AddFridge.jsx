import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllModels, fetchAllProducers, fetchAddFridge } from '../../../../redux';

import scss from './AddFridge.module.scss';

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
                case 'maxCount':
                    Number(value) > validations[validation] ? setMaxCountError(true) : setMaxCountError(false);
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

export const AddFridge = ({handleCloseModal}) => {
    const [modelId, setModelId] = useState('')
    const [producerId, setProducerId] = useState('')
    const capacity = useInput(0, { minCount: 10, maxCount: 1000, isEmpty: '' })

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user?.token || '');

    const models = useSelector((state) => state.models.models);
    const producers = useSelector((state) => state.producers.producers);

    useEffect(() => {
        dispatch(fetchAllModels({ token }));
        dispatch(fetchAllProducers({ token }));
    }, [])

    const handleChangeModel = (event) => {
        setModelId(event.target.value)
    }

    const handleChangeProducer = (event) => {
        setProducerId(event.target.value)
    }

    const handleAddFridge = () => {
        const modId = modelId || models[0]?.id;
        const prodId = producerId || producers[0]?.id;
        
        dispatch(fetchAddFridge({token, modelId: modId, producerId: prodId, capacity: capacity.value}))
    }

    return (
        <div className={scss.wrapper}>
            <h1>Добавить новый холодильник</h1>
            <div className={scss.inputText}>
                <select onChange={ e => handleChangeModel(e)}>
                    {   
                        models.map((item) => <option value={item.id} key={item.id}>{ item.name }</option>)
                    }
                </select>
            </div>
            <div className={scss.inputText}>
                <select onChange={e => handleChangeProducer(e)}>
                    {   
                        producers.map((item) => <option value={item.id} key={item.id}>{ item.name }</option>)
                    }
                </select>
            </div>
            {(capacity.isDirty && capacity.isEmpty) && <div style={{color: 'red'}}>Поле не должно быть пустым</div>}
            {(capacity.isDirty && capacity.minCountError) && <div style={{color: 'red'}}>Количество должно быть больше десяти</div>}
            {(capacity.isDirty && capacity.maxCountError) && <div style={{color: 'red'}}>Количество должно быть меньше тысячи</div>}
            <div className={scss.inputText}>
                <input onChange={e => capacity.onChange(e)} onBlur={e => capacity.onBlur(e)} value={capacity.value} type='number' name='capacity' placeholder='Максимальное количество продуктов'/>
            </div>
            <div className={scss.formButton}>
                <button disabled={ !capacity.inputValid } onClick={() => handleAddFridge()}>
                    Добавить
                </button>
            </div>
        </div>
    )
}
