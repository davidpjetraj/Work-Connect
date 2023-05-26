import {Header} from './pages/Header';
import { Sidebar} from './pages/Sidebar'
import './App.css';
import { Job } from './pages/Job';

function Jobs() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className="App">
      < Header />
            <div className='Body'>
                < Sidebar />
                < Job />
            </div>
      </div>
      </header>
    </div>
  );
}

export default Jobs;
