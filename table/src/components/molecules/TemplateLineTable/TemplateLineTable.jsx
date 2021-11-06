import Checkbox from '../../atoms/Checkbox/Checkbox';
import EvaluationCounter from '../../atoms/EvaluationCounter/EvaluationCounter';
import styles from './TemplateLineTable.module.scss';

export default function TemplateLineTable() {

  // maybe should use NavLink
  return (
    <tr className={styles.wrapper}>
      <th>
        <Checkbox />
      </th>
      <td>Metallica</td>
      <td>
        <a href="">Mama said</a>
      </td>
      <td>10.13.2021</td>
      <td>
        <EvaluationCounter />
      </td>
      <td>Los Angeles, USA</td>
      <td>||</td>
    </tr>
  );
}
