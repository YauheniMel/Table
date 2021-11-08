import styles from './EvaluationCounter.module.scss';

export default function EvaluationCounter({name, evaluation}) {

  return (
    <fieldset className={styles.wrapper}>
      <input name={name} checked={evaluation === 1} type="radio" aria-label="bad" />
      <input name={name} checked={evaluation === 2} type="radio" aria-label="so-so" />
      <input name={name} checked={evaluation === 3} type="radio" aria-label="normal" />
      <input name={name} checked={evaluation === 4} type="radio" aria-label="good" />
      <input name={name} checked={evaluation === 5} type="radio" aria-label="excellent" />
    </fieldset>
  );
}
