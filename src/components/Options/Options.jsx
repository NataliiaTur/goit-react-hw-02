import css from "./Options.module.css";
import { useState } from "react";

const Options = ({ onLeaveFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionWrapper}>
      <button
        onClick={() => onLeaveFeedback("good")}
        className={css.optionsButton}
      >
        Good
      </button>

      <button
        onClick={() => onLeaveFeedback("neutral")}
        className={css.optionsButton}
      >
        Neutral
      </button>

      <button
        onClick={() => onLeaveFeedback("bad")}
        className={css.optionsButton}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css.optionsButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
