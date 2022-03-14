import Loader from '../../atoms/Loader/Loader';
import styles from './DetailsPageLayout.module.scss';

export default function DetailsPageLayout({
  band,
  song,
  date,
  comment,
  photoName,
  isLoading,
}) {
  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <div className={styles.head}>
        <h3 className={styles.band}>{band}</h3>
        <strong>{song}</strong>
        <time>{date}</time>
      </div>
      <img src={window.location.origin + '/photo/' + photoName} alt="photo" />
      <p>{comment}</p>
    </div>
  );
}
