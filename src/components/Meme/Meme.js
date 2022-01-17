import React from "react";

import "./Meme.css";

function Meme() {
  return (
    <main className="Meme">
      <form className="Meme__form" action="">
        <div>
          <input
            type="text"
            id="upperText"
            name="upperText"
            value="Upper Text"
            className="Meme__form--input"
          ></input>

          <input
            type="text"
            id="lowerText"
            name="lowerText"
            value="Lower text"
            className="Meme__form--input"
          ></input>
        </div>
        <button className="Meme__form--button">Get a New Image</button>
      </form>
    </main>
  );
}

export default Meme;
