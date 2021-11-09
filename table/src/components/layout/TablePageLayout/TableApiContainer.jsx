import axios from 'axios';
import { useEffect } from 'react';
import { getState } from '../../../store/reducers/actions';
import TablePageLayout from './TablePageLayout';

export default function TableApiContainer({ onChangeAllCheckbox, isAllChecked, setEvaluation, onChangeCheckbox, content, dispatch }) {
  useEffect(() => {
    axios
      .get('/api')
      .then((response) => response.data)
      .then((data) => dispatch(getState(data)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <TablePageLayout
      onChangeAllCheckbox={onChangeAllCheckbox}
      isAllChecked={isAllChecked}
      setEvaluation={setEvaluation}
      onChangeCheckbox={onChangeCheckbox}
      content={content}
    />
  );
}
