import css from "./Feedback.module.css";

const Feedback = ({ dataFeedback, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <p>Good: {dataFeedback.good}</p>
      <p>Neutral: {dataFeedback.neutral}</p>
      <p>Bad: {dataFeedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback} </p>
    </>
  );
};

export default Feedback;
