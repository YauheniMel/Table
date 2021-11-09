import { useDispatch, useSelector } from 'react-redux';
import { setEvaluation, toggleCheckedAllLine, toggleCheckedLine } from '../../../store/reducers/actions';
import TableApiContainer from './TableApiContainer';

export default function TableContainer() {
  const state = useSelector((state) => state.reducer); // too much data
  const dispatch = useDispatch(); // maybe in wrong place

  function handleChangeCheckbox(isChecked, id) {
    dispatch(toggleCheckedLine(isChecked, id));
  }

  function handleChangeAllCheckbox(isAllChecked) {
    dispatch(toggleCheckedAllLine(isAllChecked));
  }

  function handleChangeEvaluation(name) {
    dispatch(setEvaluation(name, Number(event.target.value)));
  }

  return (
    <TableApiContainer
      onChangeAllCheckbox={handleChangeAllCheckbox}
      isAllChecked={state.isAllChecked}
      setEvaluation={handleChangeEvaluation}
      onChangeCheckbox={handleChangeCheckbox}
      content={state.bodyTable}
      dispatch={dispatch}
    />
  );
}

// maybe need use withRouter
