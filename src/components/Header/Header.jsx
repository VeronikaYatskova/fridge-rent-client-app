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
            <Link to='/about' className={scss.about}>
                <SvgSelector name="About"/>
            </Link>
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
            {
                !user && <Link to='/auth' className={ scss.signin }>
                    <SvgSelector name="SignIn"/>
                </Link>
            }
        </div>
    </header>)
}
