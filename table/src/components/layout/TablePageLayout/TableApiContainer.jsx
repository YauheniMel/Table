import axios from 'axios';
import { useEffect } from 'react';
import { getState } from '../../../store/reducers/actions';
import Pagination from '../../molecules/Pagination/Pagination';
import TableHead from '../../molecules/TableHead/TableHead';
import TableBody from '../../organisms/TableBody/TableBody';

export default function TableApiContainer({onChangeAllCheckbox, isAllChecked, setEvaluation, onChangeCheckbox, content, dispatch}) {
  useEffect(() => {
    axios
      .get('/api')
      .then(response => response.data)
      .then(data => dispatch(getState(data)))
  }, [])

  return (
    <table>
    <colgroup>
      <col width= "30"/>
      <col />
      <col />
      <col width= "120"/>
      <col width= "151"/>
      <col />
      <col width= "66"/>
    </colgroup>
      <TableHead onChange={onChangeAllCheckbox} isAllChecked={isAllChecked} />
      <TableBody
        setEvaluation={setEvaluation}
        onChange={onChangeCheckbox}
        content={content}
      />
      <tfoot>
        <tr>
          <td colSpan="7">
            <Pagination />
          </td>
        </tr>
      </tfoot>
      </table>
  );
}
