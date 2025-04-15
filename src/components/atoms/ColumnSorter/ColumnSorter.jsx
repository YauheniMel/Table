import styles from './ColumnSorter.module.scss';

export const ColumnSorter = ({
  title,
  sortParameter,
  activeSortParameter,
  isAscending,
  sort,
}) => (
  <button
    className={
      activeSortParameter === sortParameter
        ? `${styles.button} ${isAscending ? styles.increase : styles.decrease}`
        : styles.button
    }
    onClick={() => sort(sortParameter)}
  >
    {title}
  </button>
);
