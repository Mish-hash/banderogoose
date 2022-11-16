import './App.css';
import Goose from './components/Goose';
import { DataProvider } from './providers/DataProvider';
import { HistoryProvider } from './providers/HistoryProvider';
import { PageProvider } from './providers/PageProvider';
import { TargetProvider } from './providers/TargetPrivider';

function App() {
  return (
    <DataProvider>
      <PageProvider>
        <TargetProvider>
          <HistoryProvider>
            <div className="App">
              <Goose/>
            </div>
          </HistoryProvider>
        </TargetProvider>
      </PageProvider>
    </DataProvider>
    );
}

export default App;
