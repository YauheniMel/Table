import axios from 'axios';
import FormPageLayout from './FormPageLayout';
import { toast } from 'react-toastify';

export default function FormApiContainer({
  handleChangeInput,
  state,
  handleChangeInputFile,
}) {
  function handleSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData();
    for (let key in state) {
      formData.append(key, state[key]);
    }

    axios
      .post('/api', formData)
      .then((response) => toast(response.data))
      .catch((err) => console.error(err));
  }

  return (
    <FormPageLayout
      onSubmit={handleSubmitForm}
      handleChangeInput={handleChangeInput}
      state={state}
      handleChangeInputFile={handleChangeInputFile}
    />
  );
}
