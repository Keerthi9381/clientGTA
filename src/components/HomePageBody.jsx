import React, { Component } from 'react';
import Logo from '../images/logo.png'

class HomePageBody extends Component {
    state = {  } 
    render() { 
        return (
          <div>
            <center>
              <table>
                <tr>
                  <td rowSpan="2">
                    <img src={Logo} alt="Logo" width="400" height="400" />
                  </td>
                  <td>
                    <center>
                      <h4>
                        {" "}
                        &nbsp;
                        <i>
                          "Hard work beats talent when talent doesn't work
                          hard."
                        </i>
                      </h4>
                      <br />
                      <br />
                      <br />
                      <h4>Welcome to GTA ,</h4>
                      <h4>A bridge to connect MENTORS with their GROUPS.</h4>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <button
                        type="button"
                        onClick="location.href = '/login';"
                        className="btn btn-primary btn-lg"
                      >
                        <a href="/login" className="nav-link">
                          LOGIN
                        </a>
                      </button>
                      &nbsp; &nbsp;
                      <button type="button" className="btn btn-primary btn-lg">
                        <a href="/signup" className="nav-link">
                          SIGN UP
                        </a>
                      </button>
                    </center>
                  </td>
                </tr>
              </table>
            </center>
          </div>
        );
    }
}
 
export default HomePageBody;