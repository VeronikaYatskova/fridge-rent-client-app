import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { createSignOutAction } from '../../redux';

import { SvgSelector } from '../SvgSelector';

import scss from './Header.module.scss';

export const Header = () => {
    const dispath = useDispatch();
    const user = useAuth();

    const signOut = () => {
        dispath(createSignOutAction())
    }

    return (<header className={scss.wrapper}>
        <Link to='/' className={ scss.logo }>
            <SvgSelector name="Logo" />
        </Link>
        <div className={ scss.navigations }>
            {
                user && <Link to={ user.isOwner ? '/owner': '/user' } className={scss.account}>
                    <SvgSelector name="Account"/>    
                </Link>
            }
            {
                user && <div className={scss.signout} onClick={() => signOut()}>
                    <SvgSelector name="SignIn"/>
                </div>
            }
            <div className={scss.buttons}>
            {
                !user && <Link to='/auth/sign-up' className={scss.signin}>
                    <div className={scss.buttonwrapper}>
                        <p className={scss.text}>Добавить владельца</p>
                    </div>  
                </Link> 
            }
            {
                !user && <Link to='/auth/sign-in' className={scss.addrenter}>
                    <div className={scss.buttonwrapper}>
                        <p className={scss.text}>Войти</p>
                    </div>
                </Link>
            }
            </div>
        </div>
    </header>)
}
