
import './App.css';
import LoginPage from './komponente/LoginPage';
import RegisterPage from './komponente/RegisterPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import JednaLekcija from './komponente/JednaLekcija';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
      <Route path="/login" element = {<LoginPage/>}/>;
      <Route path="/register" element = {<RegisterPage/>}/>;
      <Route path="/" element = {<NavBar/>}>;
      <Route path="pocetna" element = {<Pocetna/>}/>;
      <Route path="jedna" element = {<JednaLekcija/>}/>;
      </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
