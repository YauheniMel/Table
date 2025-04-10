import styles from './ACheckbox.module.scss';

export const ACheckbox = ({ isChecked, onChange, name, value }) => (
  <form onChange={onChange}>
    <div className={styles.wrapper}>
      <label>
        <input
          name={name}
          value={value}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <span></span>
      </label>
    </div>
  </form>
);
