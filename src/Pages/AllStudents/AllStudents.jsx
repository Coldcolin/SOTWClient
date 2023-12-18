import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axios"
import {AuthContext} from '../../Contexts/AuthProvider';
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';

const allStuds = "/users/allusers"

const AllStudents = () => {
  const {saveUser} = useContext(AuthContext);
  const Id = useSelector((e)=> e.Id.Id)


  const navigate = useNavigate();
  const [load, setLoad] = useState(false)
  
  
  const [user, setUser] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [backUpStudents, setBackUpStudents] = useState([]);

  const getUsers =async()=>{
    try{
      setLoad(true)
      const res = await axios.get(allStuds)
      const user = res.data.data;
      const filteredUsers = await user.filter((e)=> e.role === "student");
      
      const sortedUsers = filteredUsers.sort((a, b)=> b.overallRating - a.overallRating)
      // setUsers(filteredUsers)
      
      // const back = filteredUsers.filter(i => i.stack === "Back End");
      // const front = filteredUsers.filter(i => i.stack === "Front End");
      // console.log(backEnd)
      setAllStudents(sortedUsers)
      setBackUpStudents(sortedUsers)
      // console.log(allStudents)
      setLoad(false);
      
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
  const deleteUser =async(id)=>{
    try{
      const Toast = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      
      if(Toast.isConfirmed){
        await axios.delete(`/users/remove/${id}`)
        Swal.fire(
                'Deleted!',
                'Student has been removed.',
                'success'
        )
        getUsers();
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
  const makeAlumni =async(id)=>{
    try{
      const Toast = await Swal.fire({
        title: 'Make Alumni?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, continue'
      })
      
      if(Toast.isConfirmed){
        await axios.patch(`/users/alumni/${id}`)
        Swal.fire(
                'Done!',
                'Student is now an Alumni.',
                'success'
        )
        getUsers();
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

  const studentSearch=()=>{
    const searchedArray = allStudents.filter((i)=> {
      const name = i.name.toLowerCase()
      const value = user.toLowerCase()
      return name.includes(value)
    } )
    setAllStudents(searchedArray)
  }
  useEffect(()=>{
    studentSearch()
  },[user])
 
  useEffect(()=>{
    getUsers()
    
  }, [])
  return (
    <div className="all-body">
      <div className="all-head">
      {load? <div><h1>Loading Students...</h1></div>:<div><input placeholder="Search Students" type="search" className="searchInput" value={user} onChange={(e)=> setUser(e.target.value)}/> <button  className="searchButton" onClick={()=> setAllStudents(backUpStudents)}>Reset</button></div>}
      </div>
      <div className="all-user-info">
        {
          load? <div>
            <h2>...</h2>
          </div>:
          <table className="assessment-table-holder">
          
          <thead>
          <tr className="assessment-table">
            <th className="assessment-table-title"></th>
            <th className="assessment-table-title">NAME</th>
            <th className="assessment-table-title">STACK</th>
            <th className="assessment-table-title">OVERALL SCORE</th>
            <th className="assessment-table-title">{" "}</th>
          </tr>
          </thead>
          {/* <h4>Front End Students</h4> */}
            <tbody>
            
              {/* <form> */}
              {allStudents?.map((props)=>(
              <tr className="assessment-user-info" key={props?._id}>
                <td><Link to={`/detail/${props._id}`}><img src={props?.image} alt="imae" className="assessment-image"/></Link></td>
                <td><div onClick={()=> navigate(`/detail/${props._id}`)} className="assessment-item">{props?.name}</div></td>
                <td>{props?.stack}</td>
                {props.overallRating? <td>{(Math.round(((props?.overallRating /20) * 100)* 10))/10}%</td> : <td>0%</td>}
                {Id?.role === "admin"? <td><button className="all-delete" onClick={()=> deleteUser(props._id)}>Delete</button></td>: null}
                {(Id?.role === "tutor" || Id?.role === "admin")? <td><button className="all-submit" onClick={()=> makeAlumni(props._id)}>Make Alumni</button></td>: null}
              </tr>
            ))}
            </tbody>
            
        </table>
        }
      </div>
      </div>
  )
}

export default AllStudents