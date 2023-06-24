import React from 'react'

export default function Characters(props) {
    console.log(props)
    const {characters} = props;
    console.log(characters)
  return (
    <div className = "characters">
      <h1>Personajes</h1>
    <span className = 'back-home'>Home</span>
    <div className = 'container-characters'>
      {characters.map((character, index) => (
        <div className = 'character-container' key={index}>
          {/*<p>{character.name}</p> */}
          <div>
          <img src = {character.image} alt = {character.name}/>
          </div>
          <div>
          <h3> {character.name} </h3>
          <h6>

            {character.status === " Alive " ? (
              <>
              <span className = ' alive '> Alive</span>
              </>
              ):( 
                <>
                <span className = ' dead '>Dead</span>
                </>
            )}
            </h6>
            <p>
            <span className= 'text-grey' >Episodios: </span>
            <span>{character.episode.length}</span>
            </p>
            <p>
            <span className= 'text-grey' >Especie: </span>
            <span>{character.species}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
    <></>
    </div>
    
  )
}
