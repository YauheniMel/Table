import axios from 'axios';
import FormPageLayout from './FormPageLayout';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function FormApiContainer({
  handleChangeInput,
  state,
  handleChangeInputFile,
}) {
  const [isLoading, setIsLoading] = useState();

  function handleSubmitForm(event) {
    setIsLoading(true);

    event.preventDefault();

    const formData = new FormData();
    for (let key in state) {
      formData.append(key, state[key]);
    }

    axios
      .post('/api', formData)
      .finally(() => setIsLoading(false))
      .then((response) => toast(response.data))
      .catch((err) => console.error(err));
  }

  return (
    <FormPageLayout
      onSubmit={handleSubmitForm}
      handleChangeInput={handleChangeInput}
      state={state}
      handleChangeInputFile={handleChangeInputFile}
      isLoading={isLoading}
    />
  );
}
