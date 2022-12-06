import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TraineeSignupPageBody from "../components/TraineeSignupPageBody";

const TraineeSignupPage = () => {
    return (
      <div>
            <Header />
            <TraineeSignupPageBody/>
        <Footer/>
      </div>
    );
};

export default TraineeSignupPage;
