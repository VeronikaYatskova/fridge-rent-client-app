import React, { useContext } from "react"
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { PushMessagesContext } from "../../contexts";
import { PushMessagesProvider } from "../providers";

import scss from './Layout.module.scss';

export const Layout = () => {
    const { messages } = useContext(PushMessagesContext);

    return (<>
        <Header />
        {
            messages.length > 0 && (<div className={ scss.pushMessages }>
            {
                messages.map((msg) => <PushMessagesProvider.PushMessage key={msg.id} message={msg.message} id={msg.id}/> )
            }
            </div>)
        }
        <Outlet />
    </>)
}
