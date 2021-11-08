import Checkbox from '../../atoms/Checkbox/Checkbox';
import TemplateRegulator from '../../atoms/TemplateRegulator/TemplateRegulator';
import styles from './TableHead.module.scss';

export default function TableHead() {
  return (
    <tr className={styles.wrapper}>
      <th>
        <Checkbox />
      </th>
      <th>
        <TemplateRegulator title="Band" />
      </th>
      <th>
        <TemplateRegulator title="Song" />
      </th>
      <th>
        <TemplateRegulator title="Date" />
      </th>
      <th>
        <TemplateRegulator title="Evaluation" />
      </th>
      <th>
        <TemplateRegulator title="Location" />
      </th>
      <th>Action</th>
    </tr>
  );
}
