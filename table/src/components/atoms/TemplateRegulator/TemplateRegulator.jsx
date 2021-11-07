import styles from './TemplateRegulator.module.scss';

export default function TemplateRegulator({title}) {

  return (
    <button className={styles.button}>{title}</button>
  );
}
