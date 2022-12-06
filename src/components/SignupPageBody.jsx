import React, { Component } from "react";
import signupimage from "../images/register.PNG";

const SignupPageBody = () => {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src={signupimage}
                width="300"
                height="400"
                alt="signup image"
              ></img>
            </td>
            <td>
              <center>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>
                  <b>Enables to post Tasks to the Trainees.</b>{" "}
                </p>
                <button
                  type="button"
                  onClick="location.href = '/login';"
                  className="btn btn-primary btn-lg"
                >
                  <a href="/signup/mentor" className="nav-link">
                    SIGN UP AS MENTOR
                  </a>
                </button>
              </center>

              <br />
              <hr />
              <center>
                <p>
                  <b>Enables to view Tasks and post Queries.</b>{" "}
                </p>
                <button
                  type="button"
                  onClick="location.href = '/login';"
                  className="btn btn-primary btn-lg"
                >
                  <a href="/signup/trainee" className="nav-link">
                    SIGN UP AS TRAINEE
                  </a>
                </button>
              </center>

              <br />
              <hr />
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};

export default SignupPageBody;
