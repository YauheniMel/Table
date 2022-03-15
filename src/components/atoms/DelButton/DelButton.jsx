import styles from './DelButton.module.scss';

export default function DelButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Delete
    </button>
  );
}
