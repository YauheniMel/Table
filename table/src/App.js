import './App.css';
import Pagination from './components/molecules/Pagination/Pagination';
import TemplateLineTable from './components/molecules/TemplateLineTable/TemplateLineTable';

function App() {
  return (
    <div className="App">
      <TemplateLineTable />
      <Pagination />
    </div>
  );
}

export default App;
