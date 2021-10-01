import s from './Feedback.module.css';

function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}

export default Notification;
