import MazoCartas from "../L__Mazo__Cartas/MazoCartas.jsx"
import { getCharacters } from "../../services/firebase/firestore/characters"
import { useParams } from "react-router-dom"
import { useAsync } from '../../hooks/useAsync.js'

const Mazo = () => {

    const { typeId } = useParams()
    const asyncFunction = () => getCharacters(typeId)
    const { data: characters } = useAsync(asyncFunction, [typeId])

    return (
        <div>
            <MazoCartas characters={characters} />  
        </div>
    )
}

export default Mazo