import React from 'react'
import JednaLekcija from './JednaLekcija';
import axios from 'axios';
import { useState,useEffect } from 'react';

import "../style/pocetna.css"
import "../style/JednaLekcija.css"

const PretragaPoPredmetu = ({id, lekcijaDetalji}) => {



    const [PredmetLekcije, setPredmetLekcije]=useState();
    useEffect(()=>{
        if(PredmetLekcije==null){
            axios.get("http://127.0.0.1:8000/api/predmet/2/lekcije").then((res)=>{
                console.log(res.data);
                setPredmetLekcije(res.data.lekcije);
                console.log(PredmetLekcije);
            });
        }
    },[PredmetLekcije]);
console.log(PredmetLekcije);
  return (
    <div className="all-lectures-page">
            <div className="all-lectures">
                {PredmetLekcije==null ? <></> :  PredmetLekcije.map((lekcija)=>(
                    <JednaLekcija  lekcija={lekcija} key={lekcija.id} lekcijaDetails={lekcijaDetalji}/>
                ))}
            </div>
            <div className="opredmetu">
            <h3>Istorija-učiteljica života</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <footer className ="footer">
  
  
  <div class="text-center p-3">
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">easyonlinelearning.com</a>
  </div>
  
</footer>
    </div>
    
  )
}

export default PretragaPoPredmetu