import styles from './Checkbox.module.scss';

export default function Checkbox({ isChecked, onChange, id }) {
  return (
    <div className={styles.wrapper}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => onChange(isChecked, id)} />
        <span></span>
      </label>
    </div>
  );
}
