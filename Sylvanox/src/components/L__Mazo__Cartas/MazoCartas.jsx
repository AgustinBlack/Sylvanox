import clases from './MazoCartas.module.css'
import { useState, useEffect } from 'react'
import { useCharacters } from '../../context/CartContext'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../services/firebase/firebaseConfig'

const MazoCartas = ({ characters }) => {
    const { addCard, isInMallet, removeCard } = useCharacters();
    const [cardsToAdd, setCardsToAdd] = useState([]);
    const [imageURLs, setImageURLs] = useState({});
    const [viewDetail, setViewDetail] = useState(null);

    useEffect(() => {
        const fetchImageURL = async (char) => {
            try {
                const url = await getDownloadURL(ref(storage, char.img));
                setImageURLs(prevState => ({
                    ...prevState,
                    [char.id]: url
                }));
            } catch (error) {
                console.error('Error al obtener la URL de la imagen:', error);
            }
        };

        characters.forEach((char) => {
            fetchImageURL(char);
        });

        const savedCards = localStorage.getItem('cardsToAdd')
        if (savedCards) {
            setCardsToAdd(JSON.parse(savedCards))
        }
    }, [characters]);

    const handleOnRemoveCard = (id) => {
        removeCard(id)
        setCardsToAdd(prevCards => prevCards.filter(card => card.id !== id))
    }

    const handleOnAddCard = async (char) => {
        if (!isInMallet(char.id) && cardsToAdd.length < 6) {
            const updatedCards = [...cardsToAdd, char]
            setCardsToAdd(updatedCards);
            localStorage.setItem('cardsToAdd', JSON.stringify(updatedCards))
        } else if (isInMallet(char.id)) {
            alert("La carta ya está en el mazo.");
        } else {
            alert("La carta ya está en el mazo o no hay más espacio.");
        }
    }

    const toggleOnViewDetail = (id) => {
        setViewDetail(id)
    }

    return (
        <>
            <div className={clases.container__mallet}>
                <h2 className={clases.title}>Mazo</h2>
                {cardsToAdd.length > 0 && (
                    <div className={clases.cards__added}>
                        {cardsToAdd.map(card => (
                            <div className={clases.cards__mallet} key={card.id}>
                                <h3 className={clases.name__mallet}>{card.name}</h3>
                                <div className={clases.div__img__mallet}>
                                    <img className={clases.img__mallet} src={imageURLs[card.id]} alt="" />
                                </div>
                                <button className={clases.btn__card__mallet} onClick={() => handleOnRemoveCard(card.id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {viewDetail !== null &&
                <div key={viewDetail} className={clases.card__detail}>
                    {(() => {
                        const selectedCharacter = characters.find(char => char.id === viewDetail)
                        return (
                            <>
                                <h3>{selectedCharacter.name}</h3>
                                <h5 className={clases.type}>{selectedCharacter.type} </h5>
                                <p>{selectedCharacter.passive} </p>
                                <div>
                                    <h6 className={clases.stats}>Health: {selectedCharacter.health}</h6>
                                    <h6 className={clases.stats}>Sortilege: {selectedCharacter.sortilege}</h6>
                                    <h6 className={clases.stats}>Physical Damage: {selectedCharacter.phDamage}</h6>
                                    <h6 className={clases.stats}>Magical Damage: {selectedCharacter.maDamage}</h6>
                                </div>
                                <button className={clases.card__detail__btn} onClick={() => handleOnAddCard(selectedCharacter)}>Agregar al mazo</button>
                                <button className={clases.card__detail__btn} onClick={() => setViewDetail(null)}>Ocultar detalles</button>
                            </>
                        )
                    })()}
                </div>
            }
            <div className={clases.container}>
                { characters.map(( char ) => (
                    <div className={clases.cards} key={char.id}>
                        <h3 className={clases.name}>{char.name}</h3>
                        <img className={clases.img} src={imageURLs[char.id]} alt="" />
                        <p>{char.type}</p>
                        <button className={clases.btn__card} onClick={() => toggleOnViewDetail(char.id)}>
                            Ver detalles
                        </button>
                    </div>
                ))}
            </div>
        </>
    )

}

export default MazoCartas
