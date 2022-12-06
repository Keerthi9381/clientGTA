import React, { Component, useState } from 'react';
import Logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';
const HeaderForDashboards = () => {
//   const [user,setUser] = useState(false);
//   if(localStorage.getItem('user'))
//    setUser(true);
// {user?:()}
 const navigate = useNavigate();
function logout(){
  localStorage.removeItem('role');
  localStorage.removeItem('user');
  navigate('/');
}
    return (
      <>
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              
              <img
                src={Logo}
                alt="Logo"
                width="60"
                height="60"
                className="d-inline-block "
              />
              <span className="fs-4">
                <h1>
                  <b>&nbsp;&nbsp;GROUP TASK ASSIGNER</b>
                </h1>
              </span>
            </a>

            <ul className="nav nav-pills">
             
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={logout}>
                  LOG OUT
                </a>
              </li>
            </ul>
          </header>
        </div>
      </>
    );
}
 
export default HeaderForDashboards;