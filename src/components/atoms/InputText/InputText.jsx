export const InputText = ({ title, name, value, onChange, ...rest }) => (
  <input
    type="text"
    placeholder={title}
    name={name}
    value={value}
    onChange={onChange}
    {...rest}
  />
);
