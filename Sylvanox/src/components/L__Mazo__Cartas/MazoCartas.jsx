import { useEffect, useState } from 'react'
import clases from './MazoCartas.module.css'
import { useCharacters } from '../../context/CartContext'

const MazoCartas = ({ characters }) => {
    const { addCard, isInMallet, removeCard } = useCharacters();

    const [cardsToAdd, setCardsToAdd] = useState([]);

    useEffect(() => {
        setCardsToAdd(cardsToAdd)
    }, [cardsToAdd]);

    const handleOnAddCard = (char) => {
        if (!isInMallet(char.id) && cardsToAdd.length < 6) {
            setCardsToAdd(prevCards => [...prevCards, { ...char, addedId: char.id }]);
            addCard(char);
        } else if (isInMallet(char.id)) {
            console.log("La carta ya está en el mazo.");
        } else {
            console.log("La carta ya está en el mazo o no hay más espacio.");
        }
    }

    return (
        <>
            <div className={clases.container__mallet}>
                {cardsToAdd.length > 0 && (
                    <div className={clases.cards__added}>
                        {cardsToAdd.map(card => (
                            <div key={card.id}>
                                <h3>{card.name}</h3>
                                <img src="" alt="" />
                                <button onClick={() => removeCard(card.id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className={clases.container}>
                {characters.map(char => (
                    <div className={clases.cards} key={char.id}>
                        <h3 className={clases.name}>{char.name}</h3>
                        <img src="" alt="" />
                        <p>{char.type}</p>
                        {
                            isInMallet(char.id) ? (
                                <p className={clases.btn__card}>Agregada al mazo</p>
                            ) : (
                                <button className={clases.btn__card} onClick={() => handleOnAddCard(char)}>
                                    Agregar al mazo
                                </button>
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    )

}

export default MazoCartas
