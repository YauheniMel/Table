import styles from './Rating.module.scss';

export const Rating = ({ name, value, onChange }) => (
  <form onChange={onChange}>
    <fieldset className={styles.wrapper}>
      <input
        name={name}
        defaultChecked={value === 1}
        value="1"
        type="radio"
        aria-label="bad"
      />
      <input
        name={name}
        defaultChecked={value === 2}
        value="2"
        type="radio"
        aria-label="so-so"
      />
      <input
        name={name}
        defaultChecked={value === 3}
        value="3"
        type="radio"
        aria-label="normal"
      />
      <input
        name={name}
        defaultChecked={value === 4}
        value="4"
        type="radio"
        aria-label="good"
      />
      <input
        name={name}
        defaultChecked={value === 5}
        value="5"
        type="radio"
        aria-label="excellent"
      />
    </fieldset>
  </form>
);
