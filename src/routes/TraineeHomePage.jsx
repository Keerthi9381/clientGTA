import axios from 'axios';
import React, { Component,useEffect,useState } from 'react';
import Footer from "../components/Footer";
import HeaderForDashboards from '../components/HeaderForDashboards';
import axiosFetch from './../axios/axios';
const TraineeHomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [user,setUser] = useState(false);
  
    useEffect(()=>{
        getTasks();
        if(localStorage.getItem('role')=="trainee")
        setUser(true);
    })

    async function getTasks(){
        try{
            const response = await axiosFetch.post('/task/gettask');
            //  console.log(response)
            setTasks(response.data);
        }
        catch(e){
            console.log(e)
        }
    }

    // first data grab
    //   useEffect(() => {
    //     axiosFetch.post("/task/gettask")
    //       .then(resp => resp.json())
    //       .then(data => setTasks(data)) // set data to state
    //   }, []);
    //   console.log(tasks)
    return ( 
        user!==false && 
        <>
        <HeaderForDashboards></HeaderForDashboards>
        <div align="center">
            <h1>
            TraineeHomePage
            </h1>
        </div>
        <table className="table">
            <thead >
            <tr>
            <th>Task Id</th>
             <th>Task Heading</th>
             <th>Task Description</th>
             <th>Mentor Name</th>
             <th>Posted On</th>
             </tr>
             </thead>
             <tbody>
              {tasks.map(({task_id,task_heading,task_description,mname,time_posted})=>{
                return (
                    <tr key={task_id}>
                        <td>{task_id}</td>
                        <td>{task_heading}</td>
                        <td>{task_description}</td>
                        <td>{mname}</td>
                        <td>{time_posted}</td>
                    </tr>
                )
              })}
             </tbody>
            
        </table>

        
        <Footer></Footer>
        </>
     );
}

export default TraineeHomePage;