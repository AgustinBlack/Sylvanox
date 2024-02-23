const MazoCartas = ({ characters }) => {

    return(
        <div>
            {
                characters.map( char => {
                    return (
                        <div key={char.id}>
                            <h3>{char.name}</h3>
                            <p>{char.type}</p>
                            <p>{char.health}</p>
                            <p>{char.sortilege}</p>
                            <p>{char.maDamage}</p>
                            <p>{char.phDamage}</p>
                            <p>{char.healthing}</p>
                            <p>{char.passive}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MazoCartas