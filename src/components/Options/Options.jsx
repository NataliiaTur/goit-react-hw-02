import css from "./Options.module.css";
import { useState } from "react";

const Options = ({ onLeaveFeedback, resetFeedback }) => {
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </>
  );
};

export default Options;
