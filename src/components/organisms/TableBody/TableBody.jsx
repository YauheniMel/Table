import { TableRow } from '../../molecules/TableRow/TableRow';
import { useSelector } from 'react-redux';
import { getSongsSelector } from '../../../store/selectors';

export const TableBody = ({ selectRow, selectedRows }) => {
  const songs = useSelector(getSongsSelector);

  const tableItems = songs.map((song) => {
    return (
      <TableRow
        key={song.id}
        id={song.id}
        isChecked={selectedRows.includes(song.id)}
        name={song.name}
        rating={song.rating}
        location={song.location}
        band={song.band}
        selectRow={selectRow}
      />
    );
  });

  return <tbody>{tableItems}</tbody>;
};
