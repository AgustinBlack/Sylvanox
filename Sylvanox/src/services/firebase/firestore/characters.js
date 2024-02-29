import { db } from "../firebaseConfig";
import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore";

export const getCharacters = (typeId) =>{
    const charactersCollection = typeId
    ? query(collection(db, 'characters'), where('type', '==', typeId))
    : collection(db, 'characters')
    return getDocs(charactersCollection)
        .then(querySnapchot => {
            const charactersAdapted = querySnapchot.docs.map(doc => {
                const campos = doc.data()
                return { id: doc.id, ...campos }
            })
            return charactersAdapted
        })
}

export const getCharacterById = (characterId) => {
    const characterDoc = doc(db, 'characters', characterId)

    return getDocs(characterDoc)
        .then(queryDocumentSnapshot => {
            const fields = queryDocumentSnapshot.data()
            const characterAddapted = { id: queryDocumentSnapshot.id, ...fields}
            return characterAddapted
        })
}