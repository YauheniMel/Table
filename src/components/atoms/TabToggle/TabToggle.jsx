import { NavLink } from 'react-router-dom';
import styles from './TabToggle.module.scss';

export default function TabToggle({ title, path }) {
  return (
    <NavLink className={styles.link} to={path} activeClassName={styles.active}>
      <strong>{title}</strong>
    </NavLink>
  );
}
