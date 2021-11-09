import styles from './EvaluationCounter.module.scss';

export default function EvaluationCounter({ name, evaluation, setEvaluation }) {
  return (
    <fieldset onChange={() => setEvaluation(name)} className={styles.wrapper}>
      <input name={name} defaultChecked={evaluation === 1} value="1" type="radio" aria-label="bad" />
      <input name={name} defaultChecked={evaluation === 2} value="2" type="radio" aria-label="so-so" />
      <input name={name} defaultChecked={evaluation === 3} value="3" type="radio" aria-label="normal" />
      <input name={name} defaultChecked={evaluation === 4} value="4" type="radio" aria-label="good" />
      <input name={name} defaultChecked={evaluation === 5} value="5" type="radio" aria-label="excellent" />
    </fieldset>
  );
}
