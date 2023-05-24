import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import {User} from './pages/User';
import './App.css';

function Users() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className="App">
      < Header />
            <div className='Body'>
                < Sidebar />
                < User />
            </div>
      </div>
      </header>
    </div>
  );
}

export default Users;
