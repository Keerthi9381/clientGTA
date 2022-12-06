import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from "../images/logo.png";
  import tick from "../images/tick.png";


const SignupSuccessPage = () => {
    return (
      <>
        <Header />
        <center>
          <table>
            <tr>
              <td>
                <img
                  src={Logo}
                  alt="Logo"
                  width="300"
                  height="300"
                  className="d-inline-block "
                />
              </td>
              <td>
                <img
                  src={tick}
                  alt="success"
                  width="300"
                  height="300"
                  className="d-inline-block "
                />
              </td>
            </tr>
          </table>
          <br />
          <h3>
            <b>Successfully Registered !</b>
                </h3>
                <br/>
          <button
            type="button"
            onClick="location.href = '/login';"
            className="btn btn-primary btn-lg"
          >
            <a href="/login" className="nav-link">
              LOGIN NOW
            </a>
          </button>
        </center>

        <Footer />
      </>
    );
}
 
export default SignupSuccessPage;