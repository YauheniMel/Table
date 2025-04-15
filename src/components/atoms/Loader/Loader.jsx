import styles from './Loader.module.scss';
import loaderURL from '../../../assets/icons/loader.gif';
export const Loader = () => (
  <div className={styles.wrapper}>
    <img src={loaderURL} alt="loader" />
  </div>
);
