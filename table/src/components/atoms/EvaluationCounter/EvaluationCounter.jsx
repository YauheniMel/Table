import styles from './EvaluationCounter.module.scss';

export default function EvaluationCounter() {
  // "name" must be different in each component
  return (
    <fieldset className={styles.wrapper}>
      <input type="radio" name="evaluation" aria-label="bad" />
      <input type="radio" name="evaluation" aria-label="so-so" />
      <input type="radio" name="evaluation" aria-label="normal" />
      <input type="radio" name="evaluation" aria-label="good" />
      <input type="radio" name="evaluation" aria-label="excellent" />
    </fieldset>
  );
}
