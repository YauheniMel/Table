import styles from './DetailsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTargetSongSelector } from '../../../store/selectors';
import { getSongThunk } from '../../../store/actions';
import { useParams } from 'react-router-dom';

export const DetailsPage = () => {
  const { id } = useParams();

  const song = useSelector(getTargetSongSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongThunk(id));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {song && (
        <>
          <div className={styles.head}>
            <h3>{song.band}</h3>
            <strong>{song.name}</strong>
          </div>
          <img src={song.photo} alt={song.band} />
          <p>{song.details}</p>
        </>
      )}
    </div>
  );
};
