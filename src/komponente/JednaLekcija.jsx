import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../style/pocetna.css";
import "../style/JednaLekcija.css";
const JednaLekcija = ({lekcija, vidiDetalje, obrisi})=>{
  let navigate = useNavigate();
  //()=> vidiDetalje(lekcija.id);


    return(
     <div className="card">
    <div className="card-header">
      Tezina: {lekcija.tezina}
    </div>
    <div className="card-body">
      <h5 className="card-title">{lekcija.naziv}</h5>
      <img className='slika' src={lekcija.imageUrl} alt="Lekcija"/>
      <p className="card-text">Trajanje: {lekcija.trajanje} minuta</p>
      {window.sessionStorage.getItem("auth_token")==null ? <button className="btn btn-primary mb-1"><Link to="/lekcijaCela" className='link' onClick={() => vidiDetalje(lekcija.id)}>Počni sa učenjem</Link></button> :
       <Link to="/izmeniLekciju" className='link' onClick={() => vidiDetalje(lekcija.id)}>Izmeni</Link>
    }
    { window.sessionStorage.getItem("auth_token")!=null ?  <Link to="/pocetna" className='link' onClick={()=>obrisi(lekcija.id)}>Obrisi</Link> : <></>

    }
    </div>
    <div className="card-footer text-muted">
    {lekcija.predmetId==1?
      <div>Predmet: Geografija</div> :
      lekcija.predmetId==2?
      <div>Predmet:Istorija</div>:
      <div>Predmet:Biologija</div>
    }
    </div>
    
 </div>
 
    );
};
export default JednaLekcija;