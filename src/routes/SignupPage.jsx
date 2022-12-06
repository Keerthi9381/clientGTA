import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignupPageBody from "../components/SignupPageBody";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignupPage = () => {
  const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('role')=='trainee')
         navigate('/trainee_home');
         else if(localStorage.getItem('role')=='mentor') 
         navigate('/mentor_home');
    })
  return (
    <div>
      <Header />
      <SignupPageBody />
      <Footer />
    </div>
  );
};

export default SignupPage;
