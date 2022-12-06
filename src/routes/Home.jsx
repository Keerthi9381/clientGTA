import React, { Component, createFactory } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import LoginPage from './LoginPage';
import Footer from '../components/Footer';
import HomePageBody from '../components/HomePageBody';

const Home = () => {
    
   
    return ( 
        <div>
            <Header />
            <HomePageBody/>
            <Footer/>
        </div>
     );
}

export default Home;