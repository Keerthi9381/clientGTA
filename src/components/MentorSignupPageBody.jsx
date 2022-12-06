import React, { Component, useState } from "react";
import Register from "../images/register2.PNG";
import validator from "validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosFetch from "../axios/axios";


const MentorSignupPageBody = () => {
  // const [formdata,setFormdata]=useState({})
  const [Id,setId] = useState(null);
  const [username,setUsername] = useState(null);
  const [email,setEmail] = useState(null);
  const [mobile,setmobile] = useState(null);
  const [designation,setdesignation] = useState(null);
  const [department,setdepartent] = useState(null);
  const [password,setPassword] = useState(null);
  const navigate = useNavigate();
  async function login(e){
    e.preventDefault();//Mid,Mname, designation,department,mobile_no,mentor_email, Mpassword
      try{
          const userData = {Mid:Id,Mname:username,designation:designation,department:department,mobile_no:mobile,mentor_email:email,Mpassword:password};
          console.log(userData)
          const response = await axiosFetch.post('/mentor/register',userData);

          console.log(response);
          // setTimeout(()=>{
          // },2000);
          if(response.status==201)
          navigate('/signup_success');
         }
          catch(err){
           console.log(err);
          }
      }
  const [emailError, setEmailError] = useState("");
  var passwordStr ="";

  const validateEmail = (e) => {
    let em = e.target.value;
    if (validator.isEmail(em)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
    setEmail(em)

  };

  const [nameError, setNameError] = useState("");
  const validateName = (e) => {
    let Na = e.target.value;

    const validName = new RegExp("^([a-zA-Z ]){1,}$");
    if (validName.test(Na)) {
      setNameError("");
    } else {
      setNameError("Enter Alphabets Only!");
    }
    setUsername(Na)

  };

  const [phoneError, setPhoneError] = useState("");
  const validatePhone = (e) => {
    let phone = e.target.value;

    if (validator.isMobilePhone(phone, "en-IN")) {
      setPhoneError("");
    } else {
      setPhoneError("Enter valid Phone Number!");
    }
    setmobile(phone)

  };

  const [pwdError, setPwdError] = useState("");
  const validatePassword = (e) => {
    let pwd = e.target.value;

    if (validator.isStrongPassword(pwd)) {
      setPwdError("");
     passwordStr = pwd;
    } else {
      setPwdError("Enter Strong Password!");
    }
    setPassword(pwd)

  };


  return (
    <>
      <center>
        <h3>
          <b>REGISTER AS MENTOR</b>
        </h3>
        <table>
          <tr>
            <td>
              <img src={Register} width="500" height="600"></img>
            </td>
            <td>
              <form>
                <div className="form-row">
                  <table>
                    <tr className="form-group">
                      <td>
                        <label for="empid">
                          <b>Employee ID:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          id="empid"
                          placeholder="Enter your Employee ID"
                          onChange={(e) => setId(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="name">
                          <b>Name:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your Full Name"
                          onChange={(e) => validateName(e)}
                          required
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {nameError}
                        </span>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="email">
                          <b>Email:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your official Mail ID"
                          onChange={(e) => validateEmail(e)}
                          required
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {emailError}
                        </span>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="mobileno">
                          <b>Mobile:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          id="mobileno"
                          placeholder="Enter 10 digits only"
                          onChange={validatePhone}
                          required
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {phoneError}
                        </span>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="designation">
                          <b>Designation:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="Designation"
                          placeholder="Enter your Designation"
                          onChange={(e) => setdesignation(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="designation">
                          <b>Department:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="Designation"
                          placeholder="Enter your Department Name"
                          onChange={(e) => setdepartent(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="inputPassword4">
                          <b>Set Password:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Enter New Password"
                          onChange={(e) => validatePassword(e)}
                          required
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {pwdError}
                        </span>
                      </td>
                    </tr>
                    <br />
                    {/* <tr>
                      <td>
                        <label for="inputPassword4">
                          <b>Confirm Password:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Re-Enter New Password"
                          onChange={(e) => confirmPassword(e)}
                          required
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {confirmError}
                        </span>
                      </td>
                    </tr> */}

                    <tr colspan="2">
                      <center>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="btn btn-primary">
                          <a href="/signup_success" className="nav-link" onClick={login}>
                            SUBMIT
                          </a>
                        </button>
                      </center>
                    </tr>
                  </table>
                </div>
              </form>
            </td>
          </tr>
        </table>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default MentorSignupPageBody;
