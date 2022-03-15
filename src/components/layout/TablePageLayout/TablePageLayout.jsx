import DelButton from '../../atoms/DelButton/DelButton';
import Loader from '../../atoms/Loader/Loader';
import Pagination from '../../molecules/Pagination/Pagination';
import TableHead from '../../molecules/TableHead/TableHead';
import TableBody from '../../organisms/TableBody/TableBody';

export default function TablePageLayout({
  onChangeAllCheckbox,
  isAllChecked,
  onChangeCheckbox,
  content,
  onDeleteLine,
  onChangeEvaluation,
  isIncrease,
  onChangeOrderLine,
  isLoading,
  currentPage,
  setCurrentPage,
  onClickDeleteCheckedLine,
}) {
  return (
    <>
      <DelButton onClick={onClickDeleteCheckedLine}>Delete</DelButton>
      {isLoading && <Loader />}
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
          onDeleteLine={onDeleteLine}
          onChange={onChangeCheckbox}
          content={content.bodyTable}
        />
        <tfoot>
          <tr>
            <td colSpan="7">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={content.totalPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
