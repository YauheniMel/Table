import { Route } from 'react-router-dom';
import './App.scss';
import TabToggle from './components/atoms/TabToggle/TabToggle';
import DetailsContainer from './components/layout/DetailsPageLayout/DetailsContainer';
import TableContainer from './components/layout/TablePageLayout/TableContainer';
import FormContainer from './components/layout/FormPageLayout/FormContainer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TabToggle exact path="/table" title="Table" />
        <TabToggle path="/add" title="Add" />
        <Route exact path="/table" component={TableContainer} />
        <Route path="/add" component={FormContainer} />
        <Route path="/details/:id?" component={DetailsContainer} />
      </div>
    </div>
  );
}

export default App;
