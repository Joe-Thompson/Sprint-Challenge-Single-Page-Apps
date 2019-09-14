import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => setCharacter(res.data.results))
        .catch((err) => console.log(err))
  }, [setCharacter]);

  return (
    <section className="grid-view">
      {character.map((item) => {
        return (
        <CharacterCard key={item.id} character={item} />
        )
      })}
    </section>
  );
}
