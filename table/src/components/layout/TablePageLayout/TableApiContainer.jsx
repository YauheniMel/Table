import axios from 'axios';
import { useEffect, useState } from 'react';
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

  function handleChangeSelect(event, id) {
    // need control select?
    axios
      .delete(`/api/${id}`)
      .then((response) => console.log(response)) // need install toastify
      .catch((err) => console.error(err))
      .finally(() => setIsDelete(true));
  }

  function handleChangeEvaluation(id, value) {
    // need control input?
    axios
      .put(`api/${id}`, { value })
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
      .finally(() => setIsUpdate(true));
  }

  useEffect(() => {
    axios
      .get('/api')
      .then((response) => response.data)
      .then((data) => dispatch(getState(data)))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsDelete(null);
        setIsUpdate(null);
      });
  }, [isDelete, isUpdate]);

  return (
    <TablePageLayout
      isIncrease={isIncrease}
      onChangeOrderLine={onChangeOrderLine}
      onChangeAllCheckbox={onChangeAllCheckbox}
      isAllChecked={isAllChecked}
      onChangeCheckbox={onChangeCheckbox}
      content={content}
      onChangeSelect={handleChangeSelect}
      onChangeEvaluation={handleChangeEvaluation}
    />
  );
}
