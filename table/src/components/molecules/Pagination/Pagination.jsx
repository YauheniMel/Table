import styles from './Pagination.module.scss';

export default function Pagination() {
  return (
    <div className={styles.wrapper}>
      <p>
        Total
        <strong>9</strong>
      </p>
      <ul>
        <li className={styles.btn_prev}>
          <a href=""></a>
        </li>
        <li>
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">...</a>
        </li>
        <li>
          <a href="">8</a>
        </li>
        <li>
          <a href="">9</a>
        </li>
        <li className={styles.btn_next}>
          <a href=""></a>
        </li>
      </ul>
      <form action="">
        <label>
          <button className={styles.button} type="submit">
            Jump to page:
          </button>
          <input type="number" />
        </label>
      </form>
    </div>
  );
}
