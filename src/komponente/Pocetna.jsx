import React from 'react'
import JednaLekcija from './JednaLekcija';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../style/pocetna.css";
import { Link } from 'react-router-dom';
import PretragaPoPredmetu from './PretragaPoPredmetu'
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

 const Pocetna = ({vidiDetalje,lekcija, obrisi, vidiPredmete}) => {
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
       
       <button className="btn btn-primary mb-1" type="button" id="ulaz" onClick={sort} style={{backgroundColor:"rgb(33, 37, 41)", marginLeft:20+"px"}}>
           Sortiraj po naslovu
       </button>
      {window.sessionStorage.getItem("auth_token")==null ? <></> :
           <button className="btn btn-primary mb-1" type="button" style={{backgroundColor:"rgb(33, 37, 41)", marginLeft:20+"px"}}>
               <Link to="/dodajLekciju"  style={{color:"white", textDecoration:"none"}}>
                   Dodaj novu lekciju
               </Link>
           </button>
    }
    <button className="btn btn-primary mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse3" aria-expanded="false" aria-controls="multiCollapse3" style={{backgroundColor:"rgb(33, 37, 41)", marginLeft:20+"px"}}>
    Pretraga po predmetima
</button>
<div className="col" style={{width:270}}>
    <div className="multi-collapse collapse " id="multiCollapse3" >
        {predmeti==null ? <></> : predmeti.map((predmet) => (
            <li  key={predmet.id}>
                <Link to="/pretragaPoPredmetu" onClick={()=> PretragaPoPredmetu(predmet.id)} style={{background:'transparent', borderWidth:0+"px", color:"black"}} >
                    {predmet.naziv}
                </Link>
            </li> ))}      
    </div>
</div>
           </div>

            <div className="all-lectures" id="tabela">
            <br></br>
            
                {lekc == null ? <></> : lekc.map(lekcija=> (
                    <JednaLekcija lekcija={lekcija}  vidiDetalje={vidiDetalje} obrisi={obrisi} />
                ))}
                
                
            </div>
    
    </div>
    )
}

export default Pocetna;