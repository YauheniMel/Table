import './App.scss';
import TabToggle from './components/atoms/TabToggle/TabToggle';
import Pagination from './components/molecules/Pagination/Pagination';
import TableHead from './components/molecules/TableHead/TableHead';
import TemplateLineTable from './components/molecules/TemplateLineTable/TemplateLineTable';

function App() {
  return (
    <div className="App">
      <TabToggle
        title="Table"
        isActive={true}
      />
      <TabToggle
        title="Add"
        isActive={false}
      />
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <TemplateLineTable />
          <TemplateLineTable />
          <TemplateLineTable />
          <TemplateLineTable />
        </tbody>
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

export default App;
