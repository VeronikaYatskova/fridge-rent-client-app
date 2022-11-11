import { createContext } from "react";

export const PushMessagesContext = createContext({
    messages: () => {},
    addPushMessage: () => {},
    deleteMessageById: () => {}
})