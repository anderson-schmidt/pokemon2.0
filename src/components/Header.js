import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo/logo.png";
import * as headerStyles from "./layout.module.css";

export default function Banner() {
  return(
    <header>
    <div className={headerStyles.header}>
      <div classname={headerStyles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo Pokémon Club" className={headerStyles.logoimg} />
        </Link>
      </div>
      <div className={headerStyles.menu}>
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
