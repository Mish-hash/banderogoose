import './App.css';
import Goose from './components/Goose';
import { DataProvider } from './providers/DataProvider';
import { PageProvider } from './providers/PageProvider';

function App() {
  return (
    <DataProvider>
      <PageProvider>
        <div className="App">
          <Goose/>
        </div>
      </PageProvider>
    </DataProvider>
    );
}

export default App;
