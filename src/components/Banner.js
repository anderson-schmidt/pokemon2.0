import * as React from "react";
import pikachuGif from "../images/gifs/pikachu-happy.gif";

export default function Banner()  {
  return(
  <section className="banner">
    <div className="sliders">
      <div className="slide">
        <div className="slidearea">
          <h1>Pokémon</h1>
          <h1 className="pok">ポケモン</h1>
          <h2>Gotta Catch'em all</h2>
          <img src={pikachuGif} alt="Pikachu Happy" className="pika-gif" />
        </div>
      </div>
    </div>
  </section>
  )
};