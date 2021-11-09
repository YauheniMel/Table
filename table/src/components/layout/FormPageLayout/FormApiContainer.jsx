import axios from 'axios';
import { useEffect, useState } from 'react';
import FormPageLayout from './FormPageLayout';

export default function FormApiContainer({ handleChangeInput, state }) {
  function handleSubmitForm(event) {
    event.preventDefault();

    axios
      .post('/api', state)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return <FormPageLayout onSubmit={handleSubmitForm} handleChangeInput={handleChangeInput} state={state} />;
}
