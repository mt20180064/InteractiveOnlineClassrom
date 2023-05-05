import React from 'react'
import JednaLekcija from './JednaLekcija';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../style/pocetna.css";
import { Link } from 'react-router-dom';
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
    const [predmeti, setPredmeti]=useState();
    useEffect(()=>{
        if(predmeti==null){
            axios.get("http://127.0.0.1:8000/api/predmeti").then((res)=>{
                //console.log(res.data);
                setPredmeti(res.data.predmeti);
               // console.log("nakon dodele:");
               // console.log(predmeti);
            });
        }
    },["Geografija","Istorija","Biologija"]);

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
    const [sortirano ,setSortirano]=useState();
    function sort(){
        lekc.sort((a,b)=>{
            if (a.naziv < b.naziv) {
              return -1;
            }
            if (a.naziv > b.naziv) {
              return 1;
            }
            return 0;
          });
        setSortirano(lekc);
    }
    return (

       <div>
       <br></br>
       <h1 align="center">Dobrodošli u online učionicu!</h1>
       <br></br>
       

            
                
       <div className='filters-section' >
       
       <button className="btn btn-primary mb-1" type="button" onClick={sort} style={{backgroundColor:"rgb(33, 37, 41)", marginLeft:20+"px"}}>
           Sortiraj po naslovu
       </button>
      
           <button className="btn btn-primary mb-1" type="button" style={{backgroundColor:"rgb(33, 37, 41)", marginLeft:20+"px"}}>
               <Link to="/dodajLekciju"  style={{color:"white", textDecoration:"none"}}>
                   Dodaj novu lekciju
               </Link>
           </button>
           <input type="text" id="ulaz" onkeyup="nadji()" placeholder="Pretraži lekcije po imenu" ></input>
            <div className="all-lectures">
          
            <br></br>
                {lekc == null ? <></> : lekc.map(lekcija=> (
                    <JednaLekcija lekcija={lekcija} />
                ))}
                
            </div>
    </div>
    </div>
    )
}

export default Pocetna;