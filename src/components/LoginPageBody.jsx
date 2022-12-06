import React, {useState} from "react";
import Loginimage from "../images/login.PNG";
import validator from "validator";
import axiosFetch from './../axios/axios';
import { useNavigate } from 'react-router-dom';

const LoginPageBody = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [selectedval,setVal] = useState(null);

  async function login(e) {
    e.preventDefault();
    try {
    //  console.log(selectedval)
      if (selectedval == 1) {
        const userData = { mentor_email: email, Mpassword: password };
        const response = await axiosFetch.post("/mentor/login", userData);
        localStorage.setItem('user',response.data);
        localStorage.setItem('role',"mentor");
        if(response.status==200)
        navigate("/mentor_home");
        if(response.status==400)
        alert("not a valid user")
        // else{
        //   alert("enter valid credentials")
        // }
      } 
      else if (selectedval == 2) {
        const userData = { trainee_email: email, Tpassword: password };
        // console.log(userData);
        const response = await axiosFetch.post("/trainee/login", userData);
        localStorage.setItem('user',response.data);
        localStorage.setItem('role',"trainee");
        // console.log(response);
        if(response.status==200)
        navigate("/trainee_home");
      }
      setTimeout(() => {}, 2000);
    } 
    catch (err) {
      console.log(err);
    }
  }

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    let em = e.target.value;
  //  console.log(em);
    if (validator.isEmail(em)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
    setEmail(em);
  };

  const [pwdError, setPwdError] = useState("");
  const validatePassword = (e) => {
    let pwd = e.target.value;
    if (validator.isStrongPassword(pwd)) {
      setPwdError("");
    }
    setPassword(pwd);
  };

  return (
    <div>
      <center>
        <table style={{ padding: "100px" }}>
          <tr>
            <td>
              <img
                src={Loginimage}
                alt="Logo"
                width="300"
                height="400"
                className="d-inline-block "
              />
            </td>
            <td>
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example1">
                    <b>Email address:</b>
                  </label>
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    onChange={(e) => validateEmail(e)}
                  />
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {emailError}
                  </span>
                </div>
                <label className="form-label" for="form2Example2">
                  <b>Password:</b>
                </label>
                &nbsp;
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    onChange={(e) => validatePassword(e)}
                  />
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {pwdError}
                  </span>
                </div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e)=>{setVal(e.target.value)}}
                  required 
                >
                  <option selected>
                    <b>Login As</b>
                  </option>
                  <option value="1">
                    <b>Mentor</b>
                  </option>
                  <option value="2">
                    Trainee
                  </option>
                </select>
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check"></div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-4"
                    onClick={login}
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Not a member? <a href="/signup">Sign Up</a>
                  </p>
                </div>
              </form>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};

export default LoginPageBody;
