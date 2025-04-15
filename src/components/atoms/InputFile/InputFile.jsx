import styles from './InputFile.module.scss';
import downloadIconUrl from '../../../assets/icons/download.svg';

export const InputFile = ({ title, name, accept, onChange }) => (
  <label className={styles.wrapper}>
    <input
      accept={accept}
      type="file"
      name={name}
      onChange={onChange}
      required
    />
    <span className={styles.icon}>
      <img src={downloadIconUrl} alt="downloaded" />
    </span>
    <span className={styles.title}>{title}</span>
    <span className={styles.title_ready}>File is ready</span>
  </label>
);
