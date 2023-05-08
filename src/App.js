
import './App.css';
import LoginPage from './komponente/LoginPage';
import RegisterPage from './komponente/RegisterPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import DodajLekciju from './komponente/DodajLekciju';
import IzmeniLekciju from './komponente/IzmeniLekciju';
import LekcijaCela from './komponente/LekcijaCela';
import JednaLekcija from './komponente/JednaLekcija';
import PretragaPoPredmetu from './komponente/PretragaPoPredmetu';
import Cas from './komponente/Cas';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Blog from './komponente/Blog';



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

  const [predmetLekcije, setPredmetLekcije]=useState([]);
  const vidiPredmete = (id) => {
      
      lekcije.map((lekcija) => {
      if(lekcija.predmet.id === id){
          predmetLekcije.push(lekcija);
      }
      });
  }

  const obrisi = (id) =>{

    var config = {
      method: 'delete',
      url: 'http://127.0.0.1:8000/api/lekcija/'+ id,
      headers: { 
      
      Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
      },
      
      };

  axios(config)
  .then(function (response) {
      console.log(JSON.stringify(response.data));
      console.log("Lekcija uspesno obrisana!");
      
  })
  .catch(function (error) {
      console.log(error);
  });
};

  const [lekcije, setLekcije]=useState();
  useEffect(()=>{
      if(lekcije==null){
          axios.get("http://127.0.0.1:8000/api/lekcije").then((res)=>{
              console.log(res.data);
              setLekcije(res.data.lekcije);
          });
      }
  },[lekcije]);
 
  const [lekcijaDetails, setLekcijaDetails] = useState();
  const vidiDetalje = (id) => {
      if(id == null){
          setLekcijaDetails(null);
      }else{
          lekcije.map((lekcija) => {
              if(lekcija.id === id){
                  setLekcijaDetails(lekcija);
              }
          });
      }   
  }

  return (
    <BrowserRouter className="App">
      <Routes>
      <Route path="/login" element = {<LoginPage/>}/>;
      <Route path="/register" element = {<RegisterPage/>}/>;
      <Route path="/" element = {<NavBar />}>;
      <Route path="pocetna" element = {<Pocetna vidiDetalje={vidiDetalje} obrisi = {obrisi} vidiPredmete={vidiPredmete}/>}/>;
      <Route path="/blog" element = {<Blog/>}/>;
      <Route path="/dodajLekciju" element = {<DodajLekciju predmeti={predmeti}/>}/>;
      <Route path="/izmeniLekciju" element = {<IzmeniLekciju predmeti={predmeti} lekcijaa={lekcijaDetails}/>}/>;
      <Route path="/lekcijaCela" element = {<LekcijaCela predmeti={predmeti} l={lekcijaDetails}/>}/>;
      <Route path="/pretragaPoPredmetu" element = {<PretragaPoPredmetu predmetLekcije={predmetLekcije} lekcijaDetalji={lekcijaDetails}/>}/>;
      </Route>
      </Routes>
    
    </BrowserRouter>
    

    
  );
}

export default App;
