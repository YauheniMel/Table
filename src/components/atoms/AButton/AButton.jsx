import styles from './AButton.module.scss';

export const AButton = ({ onClick, children }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
