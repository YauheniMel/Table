import React from 'react';

export default function InputText({ title, name, value, onChange }) {
  const ref = React.createRef();

  return <input ref={ref} type="text" placeholder={title} name={name} value={value} onChange={() => onChange(ref, name)} />;
}
