import axios from 'axios';
import { useEffect, useState } from 'react';
import { getState } from '../../../store/reducers/actions';
import TablePageLayout from './TablePageLayout';

export default function TableApiContainer({
  onChangeAllCheckbox,
  isAllChecked,
  setEvaluation,
  content,
  dispatch,
  handleChangeSelect,
  onChangeCheckbox,
}) {
  const [isDelete, setIsDelete] = useState(null);

  function handleChangeSelect(event, id) {
    // need control select
    axios
      .delete(`/api/${id}`)
      .then((response) => console.log(response)) // need install toastify
      .catch((err) => console.error(err))
      .finally(() => setIsDelete(true));
  }

  useEffect(() => {
    axios
      .get('/api')
      .then((response) => response.data)
      .then((data) => dispatch(getState(data)))
      .catch((err) => console.error(err))
      .finally(() => setIsDelete(null));
  }, [isDelete]);

  return (
    <TablePageLayout
      onChangeAllCheckbox={onChangeAllCheckbox}
      isAllChecked={isAllChecked}
      setEvaluation={setEvaluation}
      onChangeCheckbox={onChangeCheckbox}
      content={content}
      onChangeSelect={handleChangeSelect}
    />
  );
}
