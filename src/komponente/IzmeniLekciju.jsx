import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dugme from './Dugme';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../style/pocetna.css";
const IzmeniLekciju = ({predmeti, lekcijaa }) => {

let pre=predmeti;
    let navigate = useNavigate();

    const[lek, setLek] =useState({
        naziv: lekcijaa.naziv,
        trajanje: lekcijaa.trajanje,
        imageUrl: lekcijaa.imageUrl ,
        predmetId:lekcijaa.predmetId,
        tezina: lekcijaa.tezina,
    });
    function handleInput(e){
        let b=lek;
        b[e.target.name]=e.target.value;
        setLek(b);
    }
console.log(lek);
    function handleSelected(e){
        let b=lek;
        b[e.target.name]=e.target.selectedIndex;
        setLek(b);
    }

    function handleUpdate(e) {

        e.preventDefault();
            izmeniLekciju();
    }

    function izmeniLekciju(){

        var config = {
            method: 'put',
            url: 'http://127.0.0.1:8000/api/lekcije/'+lekcijaa.id,
            data: lek,
            
        };
    
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            if(response.data.success == true){
                
                console.log("lekcija izmenjena");
                navigate("/pocetna");
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    return (
        <>
        <br></br>
        <br></br>
        
    <form className="row g-3">
    <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">Naslov</label>
        <input type="text" className="form-control" id="inputTitle" name="naziv" default value = {lekcijaa.naziv}  onInput={handleInput} />
    </div>
    <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Slika</label>
        <input type="email" className="form-control" id="inputImage" name="imageUrl"default value = {lekcijaa.imageUrl}  onInput={handleInput}/>
    </div>
    <div className="col-md-12">
        <label htmlFor="inputSurname" className="form-label">Trajanje</label>
        <input type="text" className="form-control" id="inputDescription" name="trajanje"   onInput={handleInput} />
    </div>
    <div className="col-md-12">
    <label htmlFor="inputSurname" className="form-label">Tezina(1-5)</label>
    <input type="text" className="form-control" id="inputDescription" name="tezina"    onInput={handleInput} />
</div>
    <div className="col-6">
        <label htmlFor="inputAddress" className="form-label">Predmet</label>
        <select className="form-select" id="inputPredmet" name="predmetId" defaultValue = {pre[0].id} onChange={handleSelected}>
            {pre==null ? <></> : pre.map((predmet) => {
                return <option  key={predmet.id} value={predmet.id}>{predmet.naziv}</option>
            })}
            
        </select>
    </div>
</form>
<br></br>
<Dugme handle={handleUpdate} btnName="Azuriraj"/>
<br></br>
<br></br>
<br></br>
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
<br></br>
<footer className="footer">
  
  
  <div class="text-center p-3">
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">easyonlinelearning.com</a>
  </div>
  
</footer>
</>
    )

}
export default IzmeniLekciju