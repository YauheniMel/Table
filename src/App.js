import { Route } from 'react-router-dom';
import TabToggle from './components/atoms/TabToggle/TabToggle';
import DetailsContainer from './components/layout/DetailsPageLayout/DetailsContainer';
import TableContainer from './components/layout/TablePageLayout/TableContainer';
import FormContainer from './components/layout/FormPageLayout/FormContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TabToggle exact path="/table" title="Table" />
        <TabToggle path="/add" title="Add" />
        <Route exact path="/table/:pageNum?" component={TableContainer} />
        <Route path="/add" component={FormContainer} />
        <Route path="/details/id:id" component={DetailsContainer} />
      </div>
      <ToastContainer progressClassName={styles.toastProgressBar} />
    </div>
  );
}

export default App;
