import { NavLink } from 'react-router-dom';
import styles from './Tab.module.scss';

export const Tab = ({ title, to }) => (
  <NavLink className={styles.link} to={to} activeClassName={styles.active}>
    <strong>{title}</strong>
  </NavLink>
);
