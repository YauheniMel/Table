import './App.css';
import TemplateRegulator from './components/atoms/TemplateRegulator/TemplateRegulator';
import Pagination from './components/molecules/Pagination/Pagination';
import TemplateLineTable from './components/molecules/TemplateLineTable/TemplateLineTable';

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <TemplateLineTable />
        </tbody>
      </table>
      <Pagination />
      <TemplateRegulator title="Location" />
    </div>
  );
}

export default App;
