import styles from './DelButton.module.scss';

export default function DelButton({children, onClick}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
