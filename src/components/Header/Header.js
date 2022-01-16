import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header__logo">
        <img
          className="logo__img"
          src="https://res.cloudinary.com/duprwuo4j/image/upload/v1642368191/Logo/memeGenerator2_ooa1cx.png"
          alt="LOGO"
        ></img>
        <h3 className="logo__title">Meme Generator</h3>
      </div>
      <div className="Header__nav">
        <ul className="nav__list">
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/">About</a>
          </li>
          <li>
            {" "}
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
