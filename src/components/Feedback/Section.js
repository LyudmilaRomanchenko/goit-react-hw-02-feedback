import s from './Feedback.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <p className={s.title}>{title}</p>
      {children}
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

PropTypes.checkPropTypes(Section);

export default Section;
