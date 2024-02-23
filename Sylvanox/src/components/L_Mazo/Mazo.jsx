// import { useEffect } from "react"
// import { db } from "../../services/firebase/firebaseConfig"
// import { getDocs, collection } from "firebase/firestore"
import { getCharacters } from "../../services/firebase/firestore/characters"
import { useParams } from "react-router-dom"
import { useAsync } from '../../hooks/useAsync.js'
import MazoCartas from "../L__Mazo__Cartas/MazoCartas.jsx"

const Mazo = () => {

    const { typeId } = useParams()
    const asyncFunction = () => getCharacters(typeId)
    const { data: characters } = useAsync(asyncFunction, [typeId])


    // useEffect(() => {
    //     const charactersCollection = collection(db, 'characters');

    //     getDocs(charactersCollection)
    //         .then(querySnapshot => {
    //             const charactersAdapted = querySnapshot.docs.map(doc => {
    //                 const fields = doc.data();
    //                 return { id: doc.id, ...fields };
    //             });

    //             console.log(charactersAdapted);
    //         })
    //         .catch(error => {
    //             console.error('Error al obtener documentos:', error);
    //         });
    // }, []);

    return (
        <div>
            <p>Mazo</p>
            <MazoCartas characters={characters} />
        </div>
    )
}

export default Mazo