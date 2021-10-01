import s from './Feedback.module.css';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <p className={s.title}>{title}</p>
      {children}
    </section>
  );
}

export default Section;
