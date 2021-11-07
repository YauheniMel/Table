import './App.scss';
import Pagination from './components/molecules/Pagination/Pagination';
import TableHead from './components/molecules/TableHead/TableHead';
import TemplateLineTable from './components/molecules/TemplateLineTable/TemplateLineTable';

function App() {
  return (
    <div className="App">
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
