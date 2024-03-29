import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Main, ProductList, MainPage, About, OwnerMainPage, NotFound, SignInForm, SignUpForm } from './pages';

import scss from './App.module.scss';
import { Layout, OwnerRoleAuth, PushMessagesProvider, RenterRoleAuth, RequireAuth } from './hoc';

export const App = () => {
  return (
    <div className={ scss.wrapper }>
      <PushMessagesProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Main />}/>
            <Route path='/auth/sign-up' element={<SignUpForm />}/>
            <Route path='/auth/sign-in' element={<SignInForm />}/>
            <Route path='/auth/vk/sign-in' element={<SignInForm />}/>
            <Route path='/auth/google/sign-in' element={<SignInForm />}/>
            <Route path='/about' element={<About />}/>
            <Route to="/" element={<RequireAuth/>}>
              <Route path='/' element={<RenterRoleAuth />}>
                <Route path='/user' element={<MainPage />}/>
                <Route path='/user/:fridgeId/product-list' element={<ProductList />}/>
              </Route>
              <Route path='/' element={<OwnerRoleAuth />}>
                <Route path='/owner' element={<OwnerMainPage/>}/>
              </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </PushMessagesProvider>
    </div>
  );
}
