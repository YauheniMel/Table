import styles from './Checkbox.module.scss';

export default function Checkbox({isChecked}) {
  return (
    <div className={styles.wrapper}>
      <label>
        <input type="checkbox" checked={isChecked} />
        <span></span>
      </label>
    </div>
  );
}
