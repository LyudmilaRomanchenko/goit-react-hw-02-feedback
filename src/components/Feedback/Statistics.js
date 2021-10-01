// import React from 'react';
// import s from './Feedback.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  console.log(good);
  return (
    <div>
      {/* <h3>Statistics</h3> */}
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
