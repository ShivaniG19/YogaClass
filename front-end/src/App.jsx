
import { Outlet } from 'react-router-dom';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import homepage from "./assets/home.jpg"

function App() {
  return (
    <div className="App" >
      <Navbar />
     
      <div className='container'>
        <Outlet />
      </div>
      </div>
    
  );
}

export default App;
