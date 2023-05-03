import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = ({  }) => {
    const [userPodaci, postaviPodatke]= useState({
        email:"",
        password:""
    });
    let navigacija = useNavigate();
    function obradiDogadjaj(e){
        let noviUserPodaci=userPodaci;
        noviUserPodaci[e.target.name]=e.target.value;
        console.log(noviUserPodaci);
        postaviPodatke(noviUserPodaci);
    }
    function ulogujSe(e){
        e.preventDefault();
axios
.post("http://127.0.0.1:8000/api/login",userPodaci).then(res=>{
    console.log(res.data);
    if (res.data.success===true){
      window.sessionStorage.setItem("auth_token", res.data.access_token); 
      navigacija("/");
    }
      
    
});
    }
    return (
      <section
        className="vh-100"
        style={{
          paddingTop: 8.5 + "rem",
        }}
      >
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://www.institut.edu.rs/wp-content/uploads/2020/03/online-learning-design-concept_1284-18150-626x313.jpg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={ulogujSe}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Email adresa"
                    name="email"
                    onInput={obradiDogadjaj}
                  />
                  
                </div>
  
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Lozinka"
                    name="password"
                    onInput={obradiDogadjaj}
                  />
                  
                </div>
  
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      paddingLeft: 2.5 + "rem",
                      paddingRight: 2.5 + "rem",
                    }}
                  >
                    Prijavi se
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Nemate nalog?{" "}
                    <a href="/register" className="link-danger">
                      Registrujte se
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LoginPage;