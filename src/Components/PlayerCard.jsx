import React from "react";
import "./PlayerCard.css";
function PlayerCard(props) {
  return (
    <>
      <div class="shiny-silver-box">
        <div class="shine-effect">
          <div class="content">
            <img src="/eoin.jpg" />
            <div class="overlay-text">
              <h2>Eoin Kinsella</h2>
              <p>4th Year Astrophysics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerCard;
