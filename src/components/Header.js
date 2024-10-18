import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo/logo.png";

export default function Banner() {
  return(
    <header>
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Pokémon Club" />
        </Link>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="./animes/">Animes</Link></li>
            <li><Link to="./spin-offs/">Spin-Offs</Link></li>
            <li><Link to="./filmes/">Filmes</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
};
