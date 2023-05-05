import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../style/pocetna.css"
import JednaLekcija from './JednaLekcija';

const Cas = ({cas}) => {


    const [cass, setCass]=useState();
    useEffect(()=>{
        if(cass==null){
            let dataUser=1;
            axios.get("http://127.0.0.1:8000/api/casovi", dataUser).then((res)=>{
                console.log(res.data);
                setCass(res.data.casovi);
                console.log(cass);
            });
        }
    },[cass]);

   {/* return (

        <div>
        <br></br>
        <h2 align="left">Pregled danasnjeg casa:</h2>
        
             <div className="all-classes">
           
             <br></br>
                 {cass.cas_items == null ? <></> : cass.cas_items.map(cas=> (
                     <JednaLekcija lekcija={cass.cas_items.lekcija} />
                 ))}
                 
             </div>
     </div>
     ) 
 }*/}
}
 export default Cas;