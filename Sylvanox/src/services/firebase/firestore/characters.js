import { db } from "../firebaseConfig";
import { getDocs, collection, query, where, doc } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";

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

export const uploadImageToStorage = async (file) => {
    try {
      const storageRef = ref(storage, `img/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
};

export const addCharacterWithImage = async (characterData, imageFile) => {
    try {
      const img = await uploadImageToStorage(imageFile);
      if (img) {
        await addDoc(collection(db, 'characters'), { ...characterData, img });
        console.log('Personaje añadido con éxito');
      } else {
        console.error('Error al subir imagen');
      }
    } catch (error) {
      console.error('Error adding character:', error);
    }
};