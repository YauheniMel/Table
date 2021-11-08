import Checkbox from '../../atoms/Checkbox/Checkbox';
import EvaluationCounter from '../../atoms/EvaluationCounter/EvaluationCounter';
import SelectAction from '../../atoms/SelectAction/SelectAction';
import styles from './TemplateLineTable.module.scss';

export default function TemplateLineTable({isChecked, band, songName, datePost, evaluation, location, id}) {
  // maybe should use NavLink
  return (
    <tr className={styles.wrapper}>
      <th>
        <Checkbox isChecked={isChecked} />
      </th>
      <td>{band}</td>
      <td>
        <a href="">{songName}</a>
      </td>
      <td className={styles.position}>
        <time>{datePost}</time>
      </td>
      <td className={styles.position}>
        <EvaluationCounter evaluation={evaluation} name={`evaluation${id}`} />
      </td>
      <td>{`${location.city},${location.country}`}</td>
      <td>
        <SelectAction />
      </td>
    </tr>
  );
}
