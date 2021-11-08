import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBodyContent } from '../../../store/reducers/reducer';
import TabToggle from '../../atoms/TabToggle/TabToggle';
import Pagination from '../../molecules/Pagination/Pagination';
import TableHead from '../../molecules/TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

export default function TableContainer() {

  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBodyContent());
  }, [dispatch])

  const { bodyTable } = state;

  return (
    <div className="container">
      <TabToggle title="Table" isActive={true} />
      <TabToggle title="Add" isActive={false} />
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
        <TableHead />
        <TableBody content={bodyTable} />
        <tfoot>
          <tr>
            <td colSpan="7">
              <Pagination />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
