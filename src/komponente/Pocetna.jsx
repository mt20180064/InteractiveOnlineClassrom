import React from 'react'
import JednaLekcija from './JednaLekcija';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../style/pocetna.css"
 {/*const Pocetna = () => {
    const[lekcije, setLekcije] = useState();
    useEffect(() => {
if (lekcije==null){
    axios.get("http://127.0.0.1:8000/api/lekcije").then((res)=>{
        console.log(res.data);
        console.log(res.data[0]);
        setLekcije(res.data.lekcije);
        console.log("lekcije postavljene");
        console.log(lekcije);
    });
}
    });
    return(
        <div>
            <h1 align="center">Dobrodošli u online učionicu!</h1>
            
            {lekcije == null ? <></> : lekcije.map((lekcija) => 
            (<JednaLekcija lekcija={lekcija} />))}
            
        </div>
        

    ); 
 };
export default Pocetna; */}

 const Pocetna = ({lekcija}) => {


    const [lekc, setLekc]=useState();
    useEffect(()=>{
        if(lekc==null){
            axios.get("http://127.0.0.1:8000/api/lekcije").then((res)=>{
                console.log(res.data);
                setLekc(res.data.lekcije);
                console.log(lekc);
            });
        }
    },[lekc]);

    return (

       <div>
       <br></br>
       <h1 align="center">Dobrodošli u online učionicu!</h1>
       <br></br>
            <div className="all-lectures">
          
            <br></br>
                {lekc == null ? <></> : lekc.map(lekcija=> (
                    <JednaLekcija lekcija={lekcija} />
                ))}
                
            </div>
    </div>
    )
}

export default Pocetna;