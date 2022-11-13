import React, {useState, useEffect, useContext} from 'react';
import { useDispatch } from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { PushMessagesContext } from '../../../contexts';
import { useAuth } from '../../../hooks';
import { fetchLoginUser } from '../../../redux';
import scss from './SignIn.module.scss';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
       for (const validation in validations) {
           switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
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
        if (isEmpty || minLengthError || isEmail) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, isEmail])

    return {
        isEmpty,
        minLengthError,
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

export const SignInForm = () => {

    const dispath = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const pushMessagesContext = useContext(PushMessagesContext);
    const user = useAuth();

    const email = useInput('', {isEmpty: true, isEmail: false});
    const password = useInput('', {isEmpty: true, minLength: 1});
    const [isOwner, setOwner] = useState(false);
    
    const login = async () => {
        console.log(isOwner)
        await dispath(fetchLoginUser({ email: email.value, password: password.value, isOwner }, (message) => {
            pushMessagesContext.addPushMessage({
                message,
                id: Date.now()
            });
        },
        () => {
            const href = location.state?.from?.pathname || '/';
            navigate(href, { replace: true });
        }));
    }

    return (<div className={ scss.wrapper }>
        <div>
            <h1>Войти в аккаунт</h1>
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
        <div className={ scss.formButton }>
            <div>
                <button disabled={!email.inputValid || !password.inputValid} onClick={() => login()}>Войти</button>
            </div>
            <div className={scss.owner}>
                <div>владелец</div>
                <input value={isOwner} onChange={ () => setOwner((currentOwner) => !currentOwner) }  type="checkbox"/>
            </div>
        </div>
    </div>)
}
