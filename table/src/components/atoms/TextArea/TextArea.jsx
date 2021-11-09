import React from 'react';

export default function TextArea({ name, title, value, onChange }) {
  const ref = React.createRef();

  return <textarea ref={ref} name={name} placeholder={title} rows="10" value={value} onChange={() => onChange(ref, name)} />;
}
