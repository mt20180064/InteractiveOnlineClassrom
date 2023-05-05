
import './App.css';
import LoginPage from './komponente/LoginPage';
import RegisterPage from './komponente/RegisterPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import DodajLekciju from './komponente/DodajLekciju';
import JednaLekcija from './komponente/JednaLekcija';
import Cas from './komponente/Cas';
import { useState,useEffect } from 'react';
import axios from 'axios';



function App() {
  
  const [predmeti, setPredmeti]=useState();
  useEffect(()=>{
      if(predmeti==null){
          axios.get("http://127.0.0.1:8000/api/predmeti").then((res)=>{
              console.log(res.data);
              setPredmeti(res.data.predmeti);
          });
      }
  },[predmeti]);


  return (
    <BrowserRouter className="App">
      <Routes>
      <Route path="/login" element = {<LoginPage/>}/>;
      <Route path="/register" element = {<RegisterPage/>}/>;
      <Route path="/" element = {<NavBar/>}>;
      <Route path="pocetna" element = {<Pocetna/>}/>;
      <Route path="cas" element = {<Cas/>}/>;
      <Route path="dodajLekciju" element = {<DodajLekciju predmeti={predmeti}/>}/>;
      </Route>
      </Routes>
    
    </BrowserRouter>
    

    
  );
}

export default App;
