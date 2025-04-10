import { ACheckbox } from '../../atoms/ACheckbox/ACheckbox';
import { Rating } from '../../atoms/Rating/Rating';
import styles from './TableRow.module.scss';
import { useHistory } from 'react-router-dom';
import { AButton } from '../../atoms/AButton/AButton';
import { useDispatch } from 'react-redux';
import { deleteSongsThunk, setSongRatingThunk } from '../../../store/actions';

export const TableRow = ({
  id,
  band,
  name,
  rating,
  location,
  isChecked,
  selectRow,
}) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClickShowSong = () => {
    history.push(`/songs/${id}`);
  };

  const handleClickDeleteRow = (id) => {
    dispatch(deleteSongsThunk([id]));
  };

  const handleSetSongRating = (event) => {
    dispatch(setSongRatingThunk(id, +event.target.value));
  };

  return (
    <tr className={styles.wrapper}>
      <td>
        <ACheckbox
          value={id}
          onChange={() => selectRow(id)}
          isChecked={isChecked}
        />
      </td>
      <td onClick={handleClickShowSong}>{name}</td>
      <td>{band}</td>
      <td>
        <Rating
          onChange={handleSetSongRating}
          value={rating}
          name={`rating${id}`}
        />
      </td>
      <td>{location}</td>
      <td>
        <AButton onClick={() => handleClickDeleteRow(id)}>Delete</AButton>
      </td>
    </tr>
  );
};
