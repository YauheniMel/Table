import Checkbox from '../../atoms/Checkbox/Checkbox';
import EvaluationCounter from '../../atoms/EvaluationCounter/EvaluationCounter';
import SelectAction from '../../atoms/SelectAction/SelectAction';
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
      <td className={styles.position}>
        <time>10.13.2021</time>
      </td>
      <td className={styles.position}>
        <EvaluationCounter />
      </td>
      <td>Los Angeles, USA</td>
      <td>
        <SelectAction />
      </td>
    </tr>
  );
}
