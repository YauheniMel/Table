import { AButton } from '../../atoms/AButton/AButton';
import { TableHead } from '../../molecules/TableHead/TableHead';
import { TableBody } from '../../organisms/TableBody/TableBody';
import { useEffect, useState } from 'react';
import { Pagination } from '../../molecules/Pagination/Pagination';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { deleteSongsThunk, getSongsThunk } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongsCountSelector } from '../../../store/selectors';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/ROUTES';
import styles from './TablePage.module.scss';

export const TablePage = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitItemsPerPage, setLimitItemsPerPage] = useState(0);

  const allSongsCount = useSelector(getAllSongsCountSelector);

  const dispatch = useDispatch();

  const history = useHistory();

  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const page = +searchParams.get('page');
  const limit = +searchParams.get('limit');

  useEffect(() => {
    setSelectedRows([]);

    if (page && limit) {
      setCurrentPage(page);

      setLimitItemsPerPage(limit);

      return;
    }

    if (!allSongsCount) {
      dispatch(getSongsThunk(currentPage, limitItemsPerPage));

      return;
    }

    setLimitItemsPerPage(allSongsCount);
    setCurrentPage(1);

    history.push({
      pathname: ROUTES.songs,
      search: `?page=1&limit=${allSongsCount}`,
    });
  }, [page, limit, allSongsCount]);

  useEffect(() => {
    setSelectedRows([]);

    if (currentPage && limitItemsPerPage) {
      history.push({
        pathname: ROUTES.songs,
        search: `?page=${currentPage}&limit=${limitItemsPerPage}`,
      });

      dispatch(getSongsThunk(currentPage, limitItemsPerPage));
    }
  }, [currentPage, limitItemsPerPage]);

  const handleClickDeleteSelectedRows = () => {
    dispatch(deleteSongsThunk(selectedRows));
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows([...selectedRows.filter((rowId) => rowId !== id)]);
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className={styles.wrapper}>
      {!!selectedRows.length && (
        <AButton
          onClick={async () => {
            await handleClickDeleteSelectedRows();
          }}
        >
          Delete
        </AButton>
      )}
      <table>
        <colgroup>
          <col width="30" />
          <col width="40%" />
          <col width="20%" />
          <col width="150" />
          <col width="15%" />
          <col width="74" />
        </colgroup>
        <TableHead
          setSelectedRows={setSelectedRows}
          selectedRows={selectedRows}
        />
        <TableBody selectedRows={selectedRows} selectRow={handleSelectRow} />
        <tfoot>
          <tr>
            <td colSpan="7">
              <Pagination
                setPage={setCurrentPage}
                page={currentPage}
                limit={limitItemsPerPage}
                setLimit={setLimitItemsPerPage}
                totalCount={allSongsCount}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
