import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSortParameter,
  sortColumn,
  toggleCheckedAllLine,
  toggleCheckedLine,
} from '../../../store/reducers/actions';
import TableApiContainer from './TableApiContainer';

export default function TableContainer() {
  const state = useSelector((state) => state.reducer);

  const dispatch = useDispatch(); // maybe in wrong place

  const [isIncrease, setIsIncrease] = useState(true);

  function handleChangeCheckbox(isChecked, id) {
    dispatch(toggleCheckedLine(isChecked, id));
  }

  function handleChangeAllCheckbox(isAllChecked) {
    dispatch(toggleCheckedAllLine(isAllChecked));
  }

  function handleChangeOrderLine(name, direction) {
    dispatch(setSortParameter(direction, name));
    dispatch(sortColumn()); // decrease
    setIsIncrease(!isIncrease);
  }

  return (
    <TableApiContainer
      isIncrease={isIncrease}
      onChangeOrderLine={handleChangeOrderLine}
      onChangeAllCheckbox={handleChangeAllCheckbox}
      isAllChecked={state.isAllChecked}
      onChangeCheckbox={handleChangeCheckbox}
      content={state}
      dispatch={dispatch}
    />
  );
}
