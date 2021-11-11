import Pagination from '../../molecules/Pagination/Pagination';
import TableHead from '../../molecules/TableHead/TableHead';
import TableBody from '../../organisms/TableBody/TableBody';

export default function TablePageLayout({
  onChangeAllCheckbox,
  isAllChecked,
  onChangeCheckbox,
  content,
  onChangeSelect,
  onChangeEvaluation,
  isIncrease,
  onChangeOrderLine,
}) {
  return (
    <table>
      <colgroup>
        <col width="30" />
        <col />
        <col />
        <col width="120" />
        <col width="151" />
        <col />
        <col width="66" />
      </colgroup>
      <TableHead
        activeColumn={content.sortParameter}
        onChange={onChangeAllCheckbox}
        isAllChecked={isAllChecked}
        isIncrease={isIncrease}
        onChangeOrderLine={onChangeOrderLine}
      />
      <TableBody
        onChangeEvaluation={onChangeEvaluation}
        onChangeSelect={onChangeSelect}
        onChange={onChangeCheckbox}
        content={content.bodyTable}
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
