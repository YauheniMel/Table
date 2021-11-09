import React from 'react';
import './SelectAction.module.scss';

export default function SelectAction({ onChange, id }) {
  const ref = React.createRef();

  return (
    <select ref={ref} onChange={() => onChange(ref, id)} id="card" name="usercard">
      <option value=""></option>
      <option value="update">Update</option>
      <option value="delete">Delete</option>
    </select>
  );
}
