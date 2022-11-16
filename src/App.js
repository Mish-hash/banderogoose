import './App.css';
import Goose from './components/Goose';
import { DataProvider } from './providers/DataProvider';
import { PageProvider } from './providers/PageProvider';
import { TargetProvider } from './providers/TargetPrivider';

function App() {
  return (
    <DataProvider>
      <PageProvider>
        <TargetProvider>
          <div className="App">
            <Goose/>
          </div>
        </TargetProvider>
      </PageProvider>
    </DataProvider>
    );
}

export default App;
