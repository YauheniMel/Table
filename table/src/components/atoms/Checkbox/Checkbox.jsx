import styles from './Checkbox.module.scss';

export default function Checkbox() {

  return (
    <div className={styles.wrapper}>
      <label>
        <input type="checkbox" />
        <span></span>
      </label>
    </div>
  );
}
