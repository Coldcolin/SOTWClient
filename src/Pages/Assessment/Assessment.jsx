import React, { useEffect, useState } from 'react'
import "./Assessment.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Assessment = () => {
  const [users, setUsers] = useState([]);
  const [punctuality, setPunctuality] = useState(0);
  const [Assignments, setAssignments] = useState(0);
  const [personalDefense, setPersonalDefense] = useState(0);
  const [classParticipation, setClassParticipation] = useState(0);
  const [classAssessment, setClassAssessment] = useState(0);
  const [week, setWeek] = useState(0);
  // const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [backUpfrontEnd, setBackUpFrontEnd] = useState([]);
  const [backUpbackEnd, setBackUpBackEnd] = useState([]);
  const [frontEnd, setFrontEnd] = useState([]);
  const [backEnd, setBackEnd] = useState([]);
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")
  


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    showConfirmButton: false,
    didOpen: (toast) =>{
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

 
  const addAssessment = async (id) =>{
    try{
      const Toaster = await Swal.fire({
        title: 'Add Assessment?',
        text: `${JSON.stringify({Assignments: Assignments , personalDefense: personalDefense , classParticipation: classParticipation , punctuality: punctuality , classAssessment: classAssessment})} for week: ${week}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFB703',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      })
      if(Toaster.isConfirmed){
        await axios.post(`https://sotw-app.onrender.com/rating/add/${id}`,{Assignments: Assignments, personalDefense: personalDefense, classParticipation: classParticipation, punctuality: punctuality, classAssessment: classAssessment, week: week});
          Toast.fire({
          icon: 'success',
          title: 'Assessment Added'
        })
      }
    }catch(error){
      if(error.response){
        Toast.fire({
          icon:'error',
          title: error.response.data.message
        })
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      }else {
        console.log("Error", error.message)
      }
    }
  }

  const addSOTWFE = async (id)=>{
    try{
      if(week !== 0){
        const Toaster = await Swal.fire({
          title: 'Please Confirm',
          text: `Choose Front End SOTW for week: ${week}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#FFB703',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        })
        if(Toaster.isConfirmed){
          await axios.post(`https://sotw-app.onrender.com/algo/sotwfront/`,{week: week});
          Toast.fire({
            icon: 'success',
            title: 'Student Added'
          })
        }
      }else{
        Toast.fire({
          icon: 'error',
          title: 'Add week'
        })
      }
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }

  }
  const addSOTWBE = async (id)=>{
    try{
     if(week !== 0){
      const Toaster = await Swal.fire({
        title: 'Please Confirm',
        text: `Choose Back End SOTW for week: ${week}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFB703',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      })
      if(Toaster.isConfirmed){
        await axios.post(`https://sotw-app.onrender.com/algo/sotwback/`,{week: week});
        Toast.fire({
          icon: 'success',
          title: 'Student Added'
        })
      }
     }else{
      Toast.fire({
        icon: 'error',
        title: 'Add week'
      })
     }
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }

  }

  const getUsers =async()=>{
    try{
      setLoading(true)
      const res = await axios.get("https://sotw-app.onrender.com/users/allusers")
      const user = res.data.data;
      const filteredUsers = user.filter((e)=> e.role === "student");
      
      setUsers(filteredUsers)
      const back = filteredUsers.filter(i => i.stack === "Back End");
      const front = filteredUsers.filter(i => i.stack === "Front End");
      setFrontEnd(front);
      setBackUpFrontEnd(front);
      setBackEnd(back);
      setBackUpBackEnd(back);
      setLoading(false)
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }
  const frontEndSearch=()=>{
    const searchedArray = frontEnd.filter((i)=> {
      const name = i.name.toLowerCase()
      const value = front.toLowerCase()
      return name.includes(value)
    } )
    setFrontEnd(searchedArray)
  }
  const backEndSearch=()=>{
    const searchedArray = backEnd.filter((i)=> {
      const name = i.name.toLowerCase()
      const value = back.toLowerCase()
      return name.includes(value)
    } )
    setBackEnd(searchedArray)
  }
  useEffect(()=>{
    frontEndSearch()
  },[front])
  useEffect(()=>{
    backEndSearch()
  },[back])
  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <div className="assessment-content">
    {loading? <div><h1>Loading Frontend Students...</h1></div>:<div><input placeholder="Search Frontend" type="search" className="searchInput" value={front} onChange={(e)=> setFront(e.target.value)} /> <button onClick={()=> setFrontEnd(backUpfrontEnd)} className="searchButton">Reset</button></div>}
      <div className="assessment-top">
      </div>
      <div className="a-table">
      {/* <form > */}
      <h6>Front End Students</h6>
      <table className="assessment-table-holder">
          <thead>
          <tr className="assessment-table">
            <th className="assessment-table-title">IMAGE</th>
            <th className="assessment-table-title">FULL NAME</th>
            <th className="assessment-table-title">PUNCTUALITY</th>
            <th className="assessment-table-title">ASSIGNMENTS</th>
            <th className="assessment-table-title">CLASS ASSESSMENT</th>
            <th className="assessment-table-title">CLASS PARTICIPATION</th>
            <th className="assessment-table-title">PERSONAL DEFENSE</th>
            <th className="assessment-table-title"> WEEK</th>
            <th className="assessment-table-title"></th>
            {/* <th className="assessment-table-title">
            </th> */}
          </tr>
          </thead>
            {/* <form> */}
            
            <tbody>
            {frontEnd.map((props)=>(
              <tr className="assessment-user-info" key={props._id}>
                <td><Link to={`/detail/${props._id}`}><img src={props.image} alt="imae" className="assessment-image"/></Link></td>
                <td><div className="assessment-item">{props.name}</div></td>
                <td><input type="number" className="assessment-input" placeholder="punctuality" defaultValue={punctuality} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setPunctuality("20");
                } else {
                  setPunctuality(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="assignment" defaultValue={Assignments} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setAssignments("20");
                } else {
                  setAssignments(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Assessment"  defaultValue={classAssessment} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setClassAssessment("20");
                } else {
                  setClassAssessment(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Participation"  defaultValue={classParticipation} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setClassParticipation("20");
                } else {
                  setClassParticipation(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="Personal Defense"  defaultValue={personalDefense} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setPersonalDefense("20");
                } else {
                  setPersonalDefense(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="week" defaultValue={week} onChange={e => setWeek(e.target.value)}/></td>
                <td><button className="assessment-submit" type="submit" onClick={(e)=> addAssessment(props._id)}>Submit</button></td>
              </tr>
              
            ))}
            </tbody>
        </table>
        <h6>Back End Students</h6>
        {loading? <div><h1>Loading Backend Students...</h1></div>:<div><input placeholder="Search backend" type="search" className="searchInput" value={back} onChange={(e)=> setBack(e.target.value)} /> <button onClick={()=> setBackEnd(backUpbackEnd)} className="searchButton">Reset</button></div>}
        <table className="assessment-table-holder">
          <thead>
          <tr className="assessment-table">
            <th className="assessment-table-title">IMAGE</th>
            <th className="assessment-table-title">FULL NAME</th>
            <th className="assessment-table-title">PUNCTUALITY</th>
            <th className="assessment-table-title">ASSIGNMENTS</th>
            <th className="assessment-table-title">CLASS ASSESSMENT</th>
            <th className="assessment-table-title">CLASS PARTICIPATION</th>
            <th className="assessment-table-title">PERSONAL DEFENSE</th>
            <th className="assessment-table-title"> WEEK</th>
            <th className="assessment-table-title"></th>
            {/* <th className="assessment-table-title">
            </th> */}
          </tr>
          </thead>
            {/* <form> */}
            {/* <h6>Front End Students</h6> */}
            <tbody>
            {backEnd.map((props)=>(
              <tr className="assessment-user-info" key={props._id}>
                <td><Link to={`/detail/${props._id}`}><img src={props.image} alt="imae" className="assessment-image"/></Link></td>
                <td><div className="assessment-item">{props.name}</div></td>
                <td><input type="number" className="assessment-input" placeholder="punctuality" defaultValue={punctuality} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setPunctuality("20");
                } else {
                  setPunctuality(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="assignment" defaultValue={Assignments} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setAssignments("20");
                } else {
                  setAssignments(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Assessment"  defaultValue={classAssessment} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setClassAssessment("20");
                } else {
                  setClassAssessment(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Participation"  defaultValue={classParticipation} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setClassParticipation("20");
                } else {
                  setClassParticipation(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="Personal Defense"  defaultValue={personalDefense} onChange={(e) => {
                const value = e.target.value;
                if (parseInt(value, 10) > 20) {
                  setPersonalDefense("20");
                } else {
                  setPersonalDefense(value);
                }}} min="0" max="20"/></td>
                <td><input type="number" className="assessment-input" placeholder="week" defaultValue={week} onChange={e => setWeek(e.target.value)}/></td>
                <td><button className="assessment-submit" type="submit" onClick={(e)=> addAssessment(props._id)}>Submit</button></td>
              </tr>
            ))
              
            }
            </tbody>
          </table>
      {/* </form> */}
        </div>
        <div>
        <div style={{marginTop: 20, marginBottom: 20, paddingLeft: 20}}>
            <button className="assessment-submit SOTWFE" type="submit" onClick={()=> addSOTWBE()}>Choose SOTW BE</button>
            <input className="assessment-input" placeholder="week" onChange={e => setWeek(e.target.value)}/>
        </div>
          <div style={{marginTop: 20, marginBottom: 20, paddingLeft: 20}}>
            
          <button className="assessment-submit SOTWBE" type="submit" onClick={()=> addSOTWFE()}>Choose SOTW FE</button>
            <input className="assessment-input" placeholder="week" onChange={e => setWeek(e.target.value)}/>
          </div>
        </div>
    </div>
  )
}

export default Assessment