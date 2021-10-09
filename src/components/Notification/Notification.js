import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

PropTypes.checkPropTypes(Notification);

export default Notification;
