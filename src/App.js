
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom';
import {Home} from "./components/Home"
import {Login} from "./components/Login"
import {Logout} from "./components/Logout"
import { Orders } from './components/Orders';
import { NewOrder } from './components/NewOrder';


function App() {
  return (
    <div className="App">

    


      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>

         {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/neworder" element={<NewOrder/>}/>


      </Routes>


    </div>
  );
}

export default App;
