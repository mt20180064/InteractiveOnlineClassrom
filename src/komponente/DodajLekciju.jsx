import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dugme from './Dugme';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../style/pocetna.css";
const DodajLekciju = ({predmeti }) => {

let navigate = useNavigate();


const[novaLekcija, postaviLekciju] =useState({
    naziv:   "",
    trajanje:   "",
    imageUrl:  "",
    predmetId: "",
    tezina:  "",
});
function handleInput(e){
    let b=novaLekcija;
    b[e.target.name]=e.target.value;
    postaviLekciju(b);
}

function handleSelected(e){
    let b=novaLekcija;
    b[e.target.name]=e.target.selectedIndex;
    postaviLekciju(b);
}

function handleUpdate(e) {

    e.preventDefault();
        dodajLekciju();
}

function dodajLekciju(){
    
const FormData = require('form-data');
let data = new FormData();
data.append('naziv', novaLekcija.naziv);
data.append('predmetId', novaLekcija.predmetId);
data.append('trajanje', novaLekcija.trajanje);
data.append('tezina', novaLekcija.tezina);
data.append('imageUrl', novaLekcija.imageUrl);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/lekcije',
       
        data : data
      };
      
      axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    };





    return (
        <>
        <br>
        </br>
        <br>
        </br>
    <form className="row g-3">
    <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">Naslov</label>
        <input type="text" className="form-control" id="inputTitle" name="naziv"  onInput={handleInput} />
    </div>
    <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Slika</label>
        <input type="email" className="form-control" id="inputImage" name="imageUrl"    onInput={handleInput}/>
    </div>
    <div className="col-md-12">
        <label htmlFor="inputSurname" className="form-label">Trajanje</label>
        <input type="text" className="form-control" id="inputDescription" name="trajanje"  onInput={handleInput} />
    </div>
    <div className="col-md-12">
    <label htmlFor="inputSurname" className="form-label">Tezina(1-5)</label>
    <input type="text" className="form-control" id="inputDescription" name="tezina"  onInput={handleInput} />
</div>
    <div className="col-6">
        <label htmlFor="inputAddress" className="form-label">Predmet</label>
        <select className="form-select" id="inputPredmet" name="predmetId" defaultValue = {predmeti[1].id} onChange={handleSelected}>
            {predmeti.map((predmet) => {
                return <option  key={predmet.id} value={predmet.id}>{predmet.naziv}</option>
            })}
            
        </select>
    </div>
</form>

<Dugme handle={handleUpdate} btnName="Sacuvaj"/>
<br>
</br>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Predmet</th>
      <th scope="col">Najčitanija lekcija</th>
      <th scope="col">Ukupno korisnika čitalo</th>
      <th scope="col">Prosečna težina čitanih</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Geografija</td>
      <td>Kretanje tektonskih ploča</td>
      <td>465473</td>
      <td>4.1</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Istorija</td>
      <td>Prvi svetski rat</td>
      <td>659085</td>
      <td>3.3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Biologija</td>
      <td>Razmnožavanje kod golosemenica</td>
      <td>357697</td>
      <td>2.9</td>
    </tr>
  </tbody>
</table>
<footer className="footer">

  <div class="text-center p-3" >
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">easyonlinelearning.com</a>
  </div>
  
</footer>
</>
    )
        }

export default DodajLekciju