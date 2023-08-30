import React, { useEffect, useState } from 'react';
import axios from "axios";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

export const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async() => {
    const response = await axios.get("https://api.adviceslip.com/advice", );
    const advice = await response.data.slip;
    //todo: on firefox it always returns this same advie
    setAdvice(advice);
  }

  useEffect(() => {
    getAdvice()
  }, []);

  return (
    <div className="card">
      <p>ADVICE #{advice.id}</p>
      <h2>{advice.advice}</h2>
      <img className="divider-desktop" src={dividerDesktop} alt="desktop" />
      <img className="divider-mobile" src={dividerMobile} alt="mobile" />
      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice"/>
      </div>
    </div>
  )
}
