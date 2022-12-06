import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginPageBody from '../components/LoginPageBody';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    // const [user,setUser] = useState(false);
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
            <LoginPageBody />
            <Footer/>
            
        </div>
     );
}

export default LoginPage;