import React, { Component, useEffect } from 'react';
import AddTask from '../components/AddTask';
import { useState } from 'react';
const MentorHomePage = () => {
    const [user,setUser] = useState(false);
  
useEffect(()=>{
    if(localStorage.getItem('role')=="mentor")
    setUser(true);
},[])
    return ( 
        user!==false && 
        <div>
            <AddTask/>
        </div>
     );
}

export default MentorHomePage;