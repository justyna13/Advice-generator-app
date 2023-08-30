import React from 'react';
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

export const AdviceCard = () => {
  return (
    <div className="card">
      <p>ADVICE #1</p>
      <h2>This is an advice</h2>
      <img className="divider-desktop" src={dividerDesktop} alt="desktop" />
      <img className="divider-mobile" src={dividerMobile} alt="mobile" />
      <div className="dice">
        <img src={dice} alt="dice"/>
      </div>
    </div>
  )
}
