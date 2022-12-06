import React from 'react';
import Logo from '../images/logo.png'

const Header = () => {
    return (
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
              <a href="/" className="nav-link">
                GTA
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link">
                SIGN UP
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
}
 
export default Header;

