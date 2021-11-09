import Checkbox from '../../atoms/Checkbox/Checkbox';
import EvaluationCounter from '../../atoms/EvaluationCounter/EvaluationCounter';
import SelectAction from '../../atoms/SelectAction/SelectAction';
import styles from './TemplateLineTable.module.scss';

export default function TemplateLineTable({
  isChecked,
  band,
  song,
  datePost,
  evaluation,
  city,
  country,
  id,
  onChange,
  setEvaluation,
  onChangeSelect,
}) {
  function onClickLine(e) {
    e.preventDefault();
    window.location.href = `/details/${id}`;
  }

  function onStop(e) {
    e.stopPropagation();
  }

  return (
    <tr className={styles.wrapper} onClick={onClickLine}>
      <th onClick={onStop}>
        <Checkbox id={id} onChange={onChange} isChecked={isChecked} />
      </th>
      <td>{band}</td>
      <td>{song}</td>
      <td className={styles.position}>
        <time>{datePost}</time>
      </td>
      <td onClick={onStop} className={styles.position}>
        <EvaluationCounter evaluation={evaluation} name={`evaluation${id}`} setEvaluation={setEvaluation} />
      </td>
      <td>{`${city},${country}`}</td>
      <td onClick={onStop}>
        <SelectAction id={id} onChange={onChangeSelect} />
      </td>
    </tr>
  );
}
