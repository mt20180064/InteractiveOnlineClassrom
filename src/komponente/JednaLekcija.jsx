import {useNavigate} from 'react-router-dom';
const JednaLekcija = ({lekcija})=>{
  let navigate = useNavigate();

    return(
     <div className="card">
    <div className="card-header">
      Tezina: {lekcija.tezina}
    </div>
    <div className="card-body">
      <h5 className="card-title">{lekcija.naziv}</h5>
      <img className='slika' src={lekcija.imageUrl} alt="Lekcija"/>
      <p className="card-text">Trajanje: {lekcija.trajanje} minuta</p>
      {window.sessionStorage.getItem("auth_token")==null ? <a href="#"className="btn btn-primary">Pocni sa ucenjem</a> :
      <a href="#"className="btn btn-primary">Izmeni</a>
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