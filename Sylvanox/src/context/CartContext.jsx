import { createContext, useContext } from "react";
import { useState } from "react";

const CharactersContext = createContext()

export const CartProvider = ({children}) => {

    const [cardAdd, setCardAdd] = useState([])

    const addCard = (cardToAdd) => {
        if(!isInMallet(cardToAdd.id)) {
            setCardAdd((prevCards) => [...prevCards, cardToAdd])
        } else {
            console.log("error")
        }
    }

    const isInMallet = (id) => {
        if (Array.isArray(cardAdd)) {
            return cardAdd.find((char) => char.id === id);
        }
        return false;
    };

    const removeCard = (id) => {
        const cardUpdated = cardAdd.filter(prod => prod.id !== id)
        setCardAdd(cardUpdated);
        console.log(cardUpdated)
    }

    return (
        <CharactersContext.Provider value={{isInMallet, removeCard, addCard}}>
            {children}
        </CharactersContext.Provider>
    )
}

export const useCharacters = () => {
    return useContext(CharactersContext)
}