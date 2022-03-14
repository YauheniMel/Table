import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, createContent } from '../../../store/reducers/actions';
import FormApiContainer from './FormApiContainer';

export default function FormContainer() {
  const state = useSelector((state) => state.reducer.initContent);
  const dispatch = useDispatch();

  function handleChangeInput(elem, name) {
    dispatch(createContent(elem.current.value, name));
  }

  function handleChangeInputFile(event) {
    const photo = event.target.files[0];

    dispatch(addPhoto(photo));
  }

  return (
    <FormApiContainer
      handleChangeInput={handleChangeInput}
      state={state}
      handleChangeInputFile={handleChangeInputFile}
    />
  );
}
