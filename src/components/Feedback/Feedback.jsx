import css from "./Feedback.module.css";

const Feedback = ({ dataFeedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {dataFeedback.good}</p>
      <p>Neutral: {dataFeedback.neutral}</p>
      <p>Bad: {dataFeedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback} </p>
    </div>
  );
};

export default Feedback;
