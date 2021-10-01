import React from 'react';
// import s from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = name => {
    // console.log(this.state[name]);
    return this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
    return positivePercentage;
  };

  render() {
    return (
      <div>
        <Section title="Please leaven feedback">
          <FeedbackOptions
            options={[...Object.keys(this.state)]}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

// handleBtnClick = () => {
//   console.log(this.state);
// };

// handleGoodBtnClick = () => {
//   console.log('Good');
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };

// handleNeutralBtnClick = () => {
//   console.log('Neutral');
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// };

// handleBadBtnClick = () => {
//   console.log('Bad');
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// };

//  {
//    /* <h2>Please leaven feedback</h2> */
//  }
//  {
//    /* <ul className={s.listButton}>
//           <li className={s.listButtonItem}>
//             <button
//               type="button"
//               className={s.buttonGood}
//               // onClick={this.handleGoodBtnClick}
//               onClick={() => this.handleBtnClick('good')}
//             >
//               Good
//             </button>
//           </li>
//           <li className={s.listButtonItem}>
//             <button
//               type="button"
//               className={s.buttonNeutral}
//               onClick={() => this.handleBtnClick('neutral')}
//             >
//               Neutral
//             </button>
//           </li>
//           <li className={s.listButtonItem}>
//             <button
//               type="button"
//               className={s.buttonBad}
//               onClick={() => this.handleBtnClick('bad')}
//             >
//               Bad
//             </button>
//           </li>
//         </ul> */
//  }
//  {
//    /* <h3>Statistics</h3>
//         <ul>
//           <li>Good: {this.state.good}</li>
//           <li>Neutral: {this.state.neutral}</li>
//           <li>Bad: {this.state.bad}</li>
//           <li>Total: {this.countTotalFeedback()}</li>
//           <li>
//             Positive feedback:{' '}
//             {this.countPositiveFeedbackPercentage()
//               ? this.countPositiveFeedbackPercentage()
//               : 0}
//             %
//           </li>
//         </ul> */
//  }

//  {
//    /* <FeedbackOptions
//           options={[...Object.keys(this.state)]}
//           onLeaveFeedback={this.handleBtnClick}
//         />

//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         /> */
//  }
