import styles from './TemplateRegulator.module.scss';

export default function TemplateRegulator({
  title,
  sortParameter,
  isIncrease,
  onClick,
  activeColumn,
}) {
  return (
    <button
      className={
        activeColumn.name == sortParameter.toLowerCase()
          ? `${styles.button} ${styles[activeColumn.direction]}`
          : styles.button
      }
      onClick={() => onClick(sortParameter, isIncrease)}
    >
      {title}
    </button>
  );
}
