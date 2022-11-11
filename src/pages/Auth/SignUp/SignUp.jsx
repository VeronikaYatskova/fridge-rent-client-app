import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { PushMessagesContext } from '../../../contexts';
import { fetchRegistrationUser } from '../../../redux';
import scss from './SignUp.module.scss'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
       for (const validation in validations) {
           switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'isEmail':
                    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!regEx.test(String(value).toLowerCase())) {
                        setEmail(true);
                    } else {
                        setEmail(false);
                    }
                    break;
           }
       }
    }, [value])

    useEffect(() =>{
        if (isEmpty || minLengthError || isEmail || maxLengthError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, isEmail])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isEmail,
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


export const SignUpForm = () => {

    const dispatch = useDispatch();
    const pushMessagesContext = useContext(PushMessagesContext);
    const location = useLocation();
    const navigate = useNavigate();

    const email = useInput('', {isEmpty: true, isEmail: false});
    const password = useInput('', {isEmpty: true, minLength: 1});
    const name = useInput('', {isEmpty: true});
    const phone = useInput('', {isEmpty:true, maxLength: 60});
    const [asOwner, setAsOwner] = useState(false);

    const register = () => {
        dispatch(fetchRegistrationUser({ email: email.value, password: password.value, isOwner: asOwner, name: name.value, phone: phone.value },
            (message) => {
                pushMessagesContext.addPushMessage({
                    message,
                    id: Date.now()
                })
            },
            () => {
                const pathname = location.state?.from?.pathname || '/';

                navigate(pathname, { replace: true });
            }
        ))
    }

    const changeAsOwner = () => {
        setAsOwner((currentValue) => !currentValue);
    }

    return (<div className={ scss.wrapper }>
        <div>
            <h1>Создать аккаунт</h1>
        </div>
        {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
        {(email.isDirty && email.isEmail) && <div style={{color: 'red'}}>Поле введено не правильно</div>}
        <div className={scss.inputText} style={{ marginTop: '30px' }}>
            <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type='text' name='email' placeholder='Почта' />
        </div>
        {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
        <div className={scss.inputText} style={{ marginTop: '14px' }}>
            <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} type='password' name='password' placeholder='Пароль' />
        </div>
        {
            asOwner && (
                [
                (name.isDirty && name.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>,
                <div className={scss.inputText} style={{ marginTop: '14px' }}>
                    <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} type='text' name='name' placeholder='Имя' />
                </div>,
                (phone.isDirty && phone.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>,
                (phone.isDirty && phone.maxLengthError) && <div style={{color: 'red'}}>Поле превысило допустимое число символов</div>,
                <div className={scss.inputText} style={{ marginTop: '14px' }}>
                    <input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} value={phone.value} type='text' name='phone' placeholder='Телефон' />
                </div>]
            )
        }
        <div className={ scss.formButton }>
            <div onClick={() => register()}>
                <Link to='/user'>
                    <button disabled={ asOwner?  (!email.inputValid || !password.inputValid || !name.inputValid || !phone.inputValid): (!email.inputValid || !password.inputValid)}>Создать</button>
                </Link>
            </div>
            <div className={scss.owner}>
                <div>владелец</div>
                <input value={asOwner} onChange={() => changeAsOwner()} type="checkbox"/>
            </div>
        </div>
    </div>
    )
}
