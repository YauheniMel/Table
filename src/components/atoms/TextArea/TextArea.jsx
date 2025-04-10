export const TextArea = ({ name, title, value, onChange, ...rest }) => (
  <textarea
    name={name}
    placeholder={title}
    rows="10"
    value={value}
    onChange={onChange}
    {...rest}
  />
);
