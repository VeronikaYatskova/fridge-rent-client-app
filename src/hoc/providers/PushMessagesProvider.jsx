import React, { useContext } from "react";
import { PushMessagesContext } from "../../contexts";
import { usePushes } from "../../hooks";

import scss from './PushMessage.module.scss';

export const PushMessagesProvider = ({ children }) => {
    const { addPushMessage, deleteMessageById, messages } = usePushes([]);

    return <PushMessagesContext.Provider value={{ addPushMessage, deleteMessageById, messages }}>
        { children }
    </PushMessagesContext.Provider>
}

const PushMessage = ({ message, id }) => {
    const { deleteMessageById } = useContext(PushMessagesContext);

    return <div className={scss.wrapper}>
        <div className={scss.text}>{ message }</div>
        <div onClick={() => deleteMessageById(id)} className={ scss.cancel }>Закрыть</div>
    </div>
}

PushMessagesProvider.PushMessage = PushMessage;