import styles from './Loader.module.scss';
import loaderURL from '../../../assets/icons/loader.gif';
export default function Loader() {

  return (
    <div className={styles.wrapper}>
      <img src={loaderURL} alt="loader" />
    </div>
  )
}
