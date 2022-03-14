import { NavLink } from 'react-router-dom';
import styles from './Pagination.module.scss';

export default function Pagination({ currentPage, setCurrentPage, totalPage }) {
  function handleClickPageDown() {
    currentPage == 1 ? false : setCurrentPage(currentPage - 1);
  }
  // maybe wrong place

  function handleClickPageUp() {
    currentPage == totalPage ? false : setCurrentPage(currentPage + 1);
  }

  return (
    <div className={styles.wrapper}>
      <p>
        Total
        <strong>{totalPage}</strong>
      </p>
      <ul>
        <li className={styles.btn_prev}>
          <NavLink
            onClick={handleClickPageDown}
            to={`/table/page${currentPage}`}
          ></NavLink>
        </li>
        <li>{currentPage}</li>
        <li className={styles.btn_next}>
          <NavLink
            onClick={handleClickPageUp}
            to={`/table/page${currentPage}`}
          ></NavLink>
        </li>
      </ul>
      <form>
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
