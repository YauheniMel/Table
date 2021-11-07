import styles from './TabToggle.module.scss';

export default function TabToggle({title, isActive}) {

  return (
    <h3 className={isActive ? `${styles.title} ${styles.active}` : `${styles.title}`}>{title}</h3>
  );
}
