import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import Link from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import axios from 'axios';


const NavBar = ({ }) => {
  function handleLogout(){

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/logout',
        headers: { 
        
        Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
        
        },
        
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token",null);
        
    })
    .catch(function (error) {
        console.log(error);
    });
  
  }
    return (
        <div>
<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Učionica</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/pocetna">početna</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/blog" >blog</a>
        </li>
        {window.sessionStorage.getItem("auth_token")==null ? 
        <li className="nav-item">
          <a className="nav-link" href="/login">login</a>
        </li> : <li className="nav-item">
          <a className="nav-link" onClick={handleLogout}  href="/login"  >logout</a>
        </li>
        }
      </ul>
      
    </div>
  </div>
</nav>
<Outlet />
</div>
    );
};
export default NavBar;