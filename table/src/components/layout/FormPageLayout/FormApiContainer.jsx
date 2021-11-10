import axios from 'axios';
import FormPageLayout from './FormPageLayout';

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
      .then((response) => console.log(response))
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
