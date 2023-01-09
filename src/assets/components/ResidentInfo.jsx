import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  // console.log(character);

  const alive = () => {
    if (character.status === "Dead") {
      return "red";
    } else if (character.status === "Alive") {
      return "green";
    } else {
      return "grey";
    }
  };

  return (
    <div className="containerCharacter">
      <div className="infoWith_img">
        <div className="containerState">
          <div className="state" style={{ background: alive() }}></div>
          <span>{character.status}</span>
        </div>

        <img src={character.image} alt="" />

        <div className="info_character">
          <h2> {character.name} </h2>
          <span className="specie">Raza: </span>
          <p>{character.species}</p>
          <span>Origne</span>
          <p className="origin"> {character.origin?.name} </p>
          <span>Episodes where appear:</span>
          <p>{character.episode?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
