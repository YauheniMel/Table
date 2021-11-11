import Checkbox from '../../atoms/Checkbox/Checkbox';
import TemplateRegulator from '../../atoms/TemplateRegulator/TemplateRegulator';
import styles from './TableHead.module.scss';

export default function TableHead({
  onChange,
  isAllChecked,
  isIncrease,
  onChangeOrderLine,
  activeColumn,
}) {
  return (
    <thead>
      <tr className={styles.wrapper}>
        <th>
          <Checkbox onChange={onChange} isChecked={isAllChecked} />
        </th>
        <th>
          <TemplateRegulator
            title="Band"
            sortParameter="band"
            isIncrease={isIncrease}
            onClick={onChangeOrderLine}
            activeColumn={activeColumn}
          />
        </th>
        <th>
          <TemplateRegulator
            title="Song"
            sortParameter="song"
            isIncrease={isIncrease}
            onClick={onChangeOrderLine}
            activeColumn={activeColumn}
          />
        </th>
        <th>
          <TemplateRegulator
            title="Date"
            sortParameter="date"
            isIncrease={isIncrease}
            onClick={onChangeOrderLine}
            activeColumn={activeColumn}
          />
        </th>
        <th>
          <TemplateRegulator
            title="Evaluation"
            sortParameter="evaluation"
            isIncrease={isIncrease}
            onClick={onChangeOrderLine}
            activeColumn={activeColumn}
          />
        </th>
        <th>
          <TemplateRegulator
            title="Location"
            sortParameter="city"
            isIncrease={isIncrease}
            onClick={onChangeOrderLine}
            activeColumn={activeColumn}
          />
        </th>
        <th>Action</th>
      </tr>
    </thead>
  );
}
