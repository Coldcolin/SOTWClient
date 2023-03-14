import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axios"
import {AuthContext} from '../../Contexts/AuthProvider';
import Swal from "sweetalert2";

const allStuds = "/users/allusers"

const AllStudents = () => {
  const {saveUser} = useContext(AuthContext);
  const navigate = useNavigate();
  
  
  const [users, setUsers] = useState([])
  const getUsers =async()=>{
    try{
      const res = await axios.get(allStuds)
      const users = res.data.data;
      const filteredUsers = await users.filter((e)=> e.stack !== "Tutor");
      setUsers(filteredUsers)
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
                'Student has be removed.',
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
  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <div className="all-body">
      <div className="all-head">
        <div className="all-filter">All</div>
        <div className="all-search">Search</div>
      </div>
      <div className="all-user-info">
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
            <tbody>
              {/* <form> */}
            {users?.map((props)=>(
              <tr className="assessment-user-info" key={props?._id}>
                <td><Link to={`/detail/${props._id}`}><img src={props?.image} alt="imae" className="assessment-image"/></Link></td>
                <td><div onClick={()=> navigate(`/detail/${props._id}`)} className="assessment-item">{props?.name}</div></td>
                <td>{props?.stack}</td>
                <td>{props?.overallRating}</td>
                {saveUser?.stack === "Tutor" ? <td><button className="assessment-submit" onClick={()=> deleteUser(props._id)}>delete</button></td>: null}
              </tr>
            ))}
            </tbody>
        </table>
      </div>
      </div>
  )
}

export default AllStudents