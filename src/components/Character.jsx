import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection } = this.props.character;

    return (
      <div className="character">
        <div className="grid">
          <Name name={character} />
          <Quote quote={quote} />
          <Image
            imageUrl={image} // Pasar la URL de la imagen como imageUrl
            alt={character}
            characterDirection={characterDirection}
          />
        </div>
      </div>
    );
  }
}

export default Character;
