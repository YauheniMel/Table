import styles from './Pagination.module.scss';

export const Pagination = ({ page, setPage, limit, setLimit, totalCount }) => {
  const totalPageCount = Math.ceil(totalCount / limit);

  const handleSetPage = (value) => {
    if (value < 1) return;
    if (value > totalPageCount) return;

    setPage(value);
  };

  const handleChangeInputPage = (event) => {
    handleSetPage(+event.target.value);
  };

  const handleSetLimit = (event) => {
    if (event.target.value < 1) return;

    setLimit(+event.target.value);
  };

  const handlePreventSubmitEvent = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      page
      <ul>
        <li className={styles.btn_prev}>
          <button onClick={() => handleSetPage(page - 1)} />
        </li>
        <li>{page}</li>
        <li className={styles.btn_next}>
          <button onClick={() => handleSetPage(page + 1)} />
        </li>
      </ul>
      <div>
        <form onSubmit={handlePreventSubmitEvent}>
          <label>
            Jump to page:
            <input
              min={1}
              step={1}
              onChange={handleChangeInputPage}
              value={page}
              type="number"
            />
          </label>
        </form>
      </div>
      <div>
        <form onSubmit={handlePreventSubmitEvent}>
          <label>
            Limit items per page:
            <input
              min={1}
              step={1}
              onChange={handleSetLimit}
              value={limit}
              type="number"
            />
          </label>
        </form>
      </div>
      <p>
        Total pages:
        {totalPageCount && <strong>{totalPageCount}</strong>}
      </p>
    </div>
  );
};
