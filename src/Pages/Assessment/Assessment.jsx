import React, { useEffect, useState } from 'react'
import "./Assessment.css";
import axios from "axios";
import Swal from "sweetalert2";

const Assessment = () => {
  const [users, setUsers] = useState([]);
  const [punctuality, setPunctuality] = useState(0);
  const [Assignments, setAssignments] = useState(0);
  const [personalDefense, setPersonalDefense] = useState(0);
  const [classParticipation, setClassParticipation] = useState(0);
  const [classAssessment, setClassAssessment] = useState(0);
  const [week, setWeek] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [frontEnd, setFrontEnd] = useState([]);
  const [backEnd, setBackEnd] = useState([]);


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
        text: `${JSON.stringify({Assignments: Assignments, personalDefense: personalDefense, classParticipation: classParticipation, punctuality: punctuality, classAssessment: classAssessment, week: week})}`,
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
      const Toaster = await Swal.fire({
        title: 'Please Confirm',
        text: `Make Him/Her student of the week ${week} for Front end`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFB703',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      })
      if(Toaster.isConfirmed){
        await axios.post(`https://sotw-app.onrender.com/SOW/create/${id}`,{week: week});
        Toast.fire({
          icon: 'success',
          title: 'Student Added'
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
      const Toaster = await Swal.fire({
        title: 'Please Confirm',
        text: `Make Him/Her student of the week ${week} for Back end`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FFB703',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      })
      if(Toaster.isConfirmed){
        await axios.post(`https://sotw-app.onrender.com/BSOW/create/${id}`,{week: week});
        Toast.fire({
          icon: 'success',
          title: 'Student Added'
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
      setBackEnd(back);
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
  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <div className="assessment-content">
    {loading? <div><h1>Loading Students...</h1></div>:<div className="assessment-title">Student Assessment</div>}
      <div className="assessment-top">
        {/* <div className="assessment-filter">All</div>
        <div className="assessment-search">Search</div> */}
      </div>
      <div className="a-table">
      {/* <form > */}
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
            <th className="assessment-table-title">{
              !show ? <button className="assessment-submit SOTWBE" type="submit" onClick={()=> setShow(!show)}>Choose SOTW</button>: <button className="assessment-submit SOTWBE" type="submit" onClick={()=> setShow(!show)}>hide Buttons</button>
            }</th>
          </tr>
          </thead>
            {/* <form> */}
            {/* <h6>Front End Students</h6> */}
            <tbody>
            {frontEnd.map((props)=>(
              <tr className="assessment-user-info" key={props._id}>
                <td><img src={props.image} alt="imae" className="assessment-image"/></td>
                <td><div className="assessment-item">{props.name}</div></td>
                <td><input type="number" className="assessment-input" placeholder="punctuality" defaultValue={punctuality} onChange={e => setPunctuality(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="assignment" defaultValue={Assignments} onChange={e => setAssignments(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Assessment"  defaultValue={classAssessment} onChange={e => setClassAssessment(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Participation"  defaultValue={classParticipation} onChange={e => setClassParticipation(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="Personal Defense"  defaultValue={personalDefense} onChange={e => setPersonalDefense(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="week" defaultValue={week} onChange={e => setWeek(e.target.value)}/></td>
                <td><button className="assessment-submit" type="submit" onClick={(e)=> addAssessment(props._id)}>Submit</button></td>
                {
                  !show ? <td></td>:props.stack === "Back End"? <td><button className="assessment-submit SOTWFE" type="submit" onClick={(e)=> addSOTWBE(props._id)}>make SOTW BE</button></td>: <td><button className="assessment-submit SOTWBE" type="submit" onClick={(e)=> addSOTWFE(props._id)}>make SOTW FE</button></td>
                }
              </tr>
            ))}
            {/* <h6>Back End Students</h6> */}
            {backEnd.map((props)=>(
              <tr className="assessment-user-info" key={props._id}>
                <td><img src={props.image} alt="imae" className="assessment-image"/></td>
                <td><div className="assessment-item">{props.name}</div></td>
                <td><input type="number" className="assessment-input" placeholder="punctuality" defaultValue={punctuality} onChange={e => setPunctuality(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="assignment" defaultValue={Assignments} onChange={e => setAssignments(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Assessment"  defaultValue={classAssessment} onChange={e => setClassAssessment(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="Class Participation"  defaultValue={classParticipation} onChange={e => setClassParticipation(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="Personal Defense"  defaultValue={personalDefense} onChange={e => setPersonalDefense(e.target.value)}/></td>
                <td><input type="number" className="assessment-input" placeholder="week" defaultValue={week} onChange={e => setWeek(e.target.value)}/></td>
                <td><button className="assessment-submit" type="submit" onClick={(e)=> addAssessment(props._id)}>Submit</button></td>
                {
                  !show ? <td></td>:props.stack === "Back End"? <td><button className="assessment-submit SOTWFE" type="submit" onClick={(e)=> addSOTWBE(props._id)}>make SOTW BE</button></td>: <td><button className="assessment-submit SOTWBE" type="submit" onClick={(e)=> addSOTWFE(props._id)}>make SOTW FE</button></td>
                }
              </tr>
            ))}
            </tbody>
        </table>
      {/* </form> */}
        </div>
    </div>
  )
}

export default Assessment