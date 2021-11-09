import styles from './InputFile.module.scss';
import iconDownloadUrl from '../../../assets/icons/download.svg';

export default function InputFile({ title, name }) {
  return (
    <label className={styles.wrapper}>
      <input type="file" name={name} id={name} />
        <span className={styles.icon}>
          <img src={iconDownloadUrl} alt="" />
        </span>
        <span className={styles.title}>{title}</span>
    </label>
  );
}
