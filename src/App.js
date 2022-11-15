import './App.css';
import Goose from './components/Goose';
import { DataProvider } from './providers/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Goose/>
      </div>
    </DataProvider>
    );
}

export default App;
