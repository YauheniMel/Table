import './SelectAction.module.scss';

export default function SelectAction() {
  return (
    <select id="card" name="usercard">
      <option value="update">Update</option>
      <option value="delete">Delete</option>
    </select>
  );
}
