import { useDispatch, useSelector } from 'react-redux';
import { createContent } from '../../../store/reducers/actions';
import FormApiContainer from './FormApiContainer';

export default function FormContainer() {
  const state = useSelector((state) => state.reducer.initContent)
  const dispatch = useDispatch();

  function handleChangeInput(elem, name) {
    dispatch(createContent(elem.current.value, name))
  }

  return (
    <FormApiContainer
      handleChangeInput={handleChangeInput}
      state={state}
    />
  );
}
