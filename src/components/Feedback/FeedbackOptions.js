import React from 'react';
import s from './Feedback.module.css';

//options,
class FeedbackOptions extends React.Component {
  render() {
    console.log(this.props.options);

    return (
      <ul className={s.listButton}>
        {this.props.options.map((option, index) => {
          console.log(option);
          return (
            <li className={s.listButtonItem} key={index}>
              <button
                type="button"
                className={s.button}
                onClick={() => this.props.onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackOptions;

// console.log(onLeaveFeedback);
// //   console.log(options.options);
// //   const array = (options.options);
// //   console.log(array);
// options.options.map((option, index) =>
// //   console.log(option);

// // {/* <li className={s.listButtonItem}>
//           <button
//             type="button"
//             className={s.buttonGood}
//             onClick={() => onLeaveFeedback('good')}
//           >
//             Good
//           </button>
//         </li>
//         <li className={s.listButtonItem}>
//           <button
//             type="button"
//             className={s.buttonNeutral}
//             onClick={() => onLeaveFeedback('neutral')}
//           >
//             Neutral
//           </button>
//         </li>
//         <li className={s.listButtonItem}>
//           <button
//             type="button"
//             className={s.buttonBad}
//             onClick={() => onLeaveFeedback('bad')}
//           >
//             Bad
//           </button>
//         </li> */}
//       {/* </ul> */}
//     // </div>
