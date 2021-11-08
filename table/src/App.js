import { Route } from 'react-router-dom';
import './App.scss';
import TabToggle from './components/atoms/TabToggle/TabToggle';
import FormPageLayout from './components/layout/FormPageLayout/FormPageLayout';
import TablePageLayout from './components/layout/TablePageLayout/TablePageLayout';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TabToggle exact path="/table" title="Table" />
        <TabToggle path="/add" title="Add" />
        <Route exact path="/table" component={TablePageLayout} />
        <Route path="/add" component={FormPageLayout} />
      </div>
    </div>
  );
}

export default App;
