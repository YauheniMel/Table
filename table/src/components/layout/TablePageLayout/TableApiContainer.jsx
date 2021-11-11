import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getState } from '../../../store/reducers/actions';
import TablePageLayout from './TablePageLayout';

export default function TableApiContainer({
  onChangeAllCheckbox,
  isAllChecked,
  content,
  dispatch,
  onChangeCheckbox,
  isIncrease,
  onChangeOrderLine,
}) {
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleDeleteLine(event, id) {
    //need rename
    setIsLoading(true);
    // need control select?
    axios
      .delete(`/api/${id}`)
      .finally(() => {
        setIsLoading(false);
        setIsDelete(true);
      })
      .then((response) => toast(response.data))
      .catch((err) => console.error(err));
  }

  function handleClickDeleteCheckedLine() {
    const arrId = [];

    content.bodyTable.forEach((item) => {
      if (item.isChecked) {
        arrId.push(item.id);
      }
    });

    axios
      .delete(`/api/${arrId}`)
      .finally(() => {
        setIsLoading(false);
        setIsDelete(true);
      })
      .then((response) => toast(response.data))
      .catch((err) => console.error(err));
  }

  function handleChangeEvaluation(id, value) {
    setIsLoading(true);
    // need control input?
    axios
      .put(`/api/${id}`, { value })
      .finally(() => {
        setIsLoading(false);
        setIsUpdate(true);
      })
      .then((response) => toast(response.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`/api/${currentPage}`)
      .finally(() => {
        setIsLoading(false);
        setIsDelete(null);
        setIsUpdate(null);
      })
      .then((response) => response.data)
      .then((data) => dispatch(getState(data)))
      .catch((err) => console.error(err));
  }, [isDelete, isUpdate, currentPage]);

  return (
    <TablePageLayout
      onClickDeleteCheckedLine={handleClickDeleteCheckedLine}
      isIncrease={isIncrease}
      onChangeOrderLine={onChangeOrderLine}
      onChangeAllCheckbox={onChangeAllCheckbox}
      isAllChecked={isAllChecked}
      onChangeCheckbox={onChangeCheckbox}
      content={content}
      onDeleteLine={handleDeleteLine}
      onChangeEvaluation={handleChangeEvaluation}
      isLoading={isLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}
