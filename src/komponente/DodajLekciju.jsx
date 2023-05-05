import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dugme from './Dugme';
import axios from 'axios';
import { useState,useEffect } from 'react';

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
</>
    )
        }

export default DodajLekciju