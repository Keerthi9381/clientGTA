import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MentorSignupPageBody from '../components/MentorSignupPageBody';


const MentorSignupPage = () => {
    return ( 
        <div>
            <Header />
            <MentorSignupPageBody/>
            
            <Footer/>
        </div>
     );
}
 
export default MentorSignupPage;