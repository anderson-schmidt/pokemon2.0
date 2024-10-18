import * as React from "react";
import pikachuGif from "../images/gifs/pikachu.gif";
import logoPika from "../images/logo/logoPika.png";

export default function AboutSection() {
    return(
  <section className="default light dl">
    <h2 className="section-title">Sobre Pokémon</h2>
    <section className="section-body">
      <section className="section">
        <section className="section--left">
          <p>
            O nome Pokémon é uma abreviação da marca japonesa Pocket Monsters (ポケットモンスター Poketto Monsutā?).
            O termo Pokémon, além de se referir a própria franquia Pokémon, também se refere às mais de 900 espécies
            de ficção que aparecem na mídia de Pokémon...
          </p>
          <img src={pikachuGif} alt="Pikachu" />
        </section>
        <section className="section--right">
          <img src={logoPika} alt="Logo Pikachu" />
        </section>
      </section>
    </section>
  </section>
    )
};

