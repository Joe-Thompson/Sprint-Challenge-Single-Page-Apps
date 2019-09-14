import React from "react";


  export default function CharacterCard({ character }) {
    return (
        <div className='character' >
          <img src={character.image} alt='missing' />
            <h4>{character.name}</h4>
              <span>{character.species} {character.status}</span>
            <div>
              <p>Location: {character.location.name}</p><br/>
              <p>Origin: {character.origin.name}</p>
            </div>
        </div>
    )
}
