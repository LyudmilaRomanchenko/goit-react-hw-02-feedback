import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodBtnClick = () => {
    console.log('Good');
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralBtnClick = () => {
    console.log('Neutral');
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadBtnClick = () => {
    console.log('Bad');
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Please leaven feedback</h2>
        <ul className={s.listButton}>
          <li className={s.listButtonItem}>
            <button
              type="button"
              className={s.buttonGood}
              onClick={this.handleGoodBtnClick}
            >
              Good
            </button>
          </li>
          <li className={s.listButtonItem}>
            <button
              type="button"
              className={s.buttonNeutral}
              onClick={this.handleNeutralBtnClick}
            >
              Neutral
            </button>
          </li>
          <li className={s.listButtonItem}>
            <button
              type="button"
              className={s.buttonBad}
              onClick={this.handleBadBtnClick}
            >
              Bad
            </button>
          </li>
        </ul>
        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
