import React from 'react';

import scss from './Auth.module.scss';
import { SignInForm } from './SignIn';
import { SignUpForm } from './SignUp/SignUp';

export const Auth = () => {
    return (
        <div className={ scss.wrapper }>
            <div className={ scss.signIn } >
                <SignUpForm/>
            </div>
            <div className={ scss.signIn } >
                <SignInForm/>
            </div>
        </div>
    )
}
