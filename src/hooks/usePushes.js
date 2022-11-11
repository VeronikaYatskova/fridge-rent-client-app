import { useEffect, useState } from "react"

export const usePushes = (intialMessages = []) => {
    const [messages, setMessages] = useState(intialMessages);
    
    const deleteMessageById = (id = 0) => {
        setMessages((currentMessages) => currentMessages.filter((push) => push.id !== id))
    }
    
    useEffect(() => {
        const deletePushesOneByOne = (id) => {
            if (messages.length && messages[0].id === id) {
                deleteMessageById(id)
            }
        }

        if (messages.length > 0) {
            const { id } = messages[0];
            const timeoutId = setTimeout(deletePushesOneByOne.bind(null, id), 20000);

            return () => {
                clearTimeout(timeoutId);
            }  
        }
    }, [messages])
    
    const addPushMessage = (pushMessage = { id: 0, message: 'defaulMessage' }) => {
        setMessages((currentMessages) => [...currentMessages, pushMessage])
    } 

    return {
        messages,
        addPushMessage,
        deleteMessageById
    }
}